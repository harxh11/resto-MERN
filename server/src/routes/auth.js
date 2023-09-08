import express  from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";

const router1 = express.Router();

router1.post("/register", async (req,res) => {
    const {name, email, password} = req.body;

    const user = await UserModel.findOne({email});

    if (user) {
        res.json({message: "Email already exists!"});
    } else {

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = new UserModel({...req.body, password: hashedPass});
        await newUser.save();
        res.json({message: "User registered successfully :) Please Login.."});
    }
    
});

router1.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});

        if (!user){
            res.json({message: "Email not found", success: false});
        } else {

            const check = await bcrypt.compare(password, user.password);


            if (check){

                const token = jwt.sign({id: user._id}, "secret");
                res.json({token, userID: user._id ,message: "Login was Successfull :)", success: true});
            } else {
                res.json({message: "Email or Password enetered is wrong.. :(", success: false});
            }
        }

    } catch (err) {
        console.error(err);
    }
    

});


router1.post("/googleLogin", async (req, res) => {
    try{
        const email = req.body.email;
        const user = await UserModel.findOne({email});
    
        const token = jwt.sign({id: user._id}, "secret");
        res.json({token, userID: user._id});
        
    } catch (err) {
        console.error(err);
    }
    
})

router1.post("/userExist", async (req, res) => {
    const email = req.body.email;
    const user = await UserModel.findOne({email});
    var userExist = false;
    if (user) {
        userExist = true;
    } 
    res.json({userExist});
})

export {router1 as AuthRouter}