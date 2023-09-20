// import UserMode
import express from "express";
import { UserModel } from "../models/User.js";
import mongoose from "mongoose";


const router1 = express.Router();

router1.get("/", async (req,res) => {
    
    const users = await UserModel.find({});
    res.json({message: "Get Request Recieved"});
});

router1.post("/", async (req,res) => {
    
    try {
        const user = await UserModel.findOne({username: req.body.username});

        if (user){
            res.json({message: "User Already Exists"});
        } else {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.json({message: "New User saved successfully"});
        }

        // const data = req.body; 
        // const user = new UsersModel({data});

        // await user.save();
        // res.json({message: req.body});
    
    } catch (err) {
        console.error(err);
    }
});

router1.get("/getUser", async (req, res) => {
    try {
        const userID = req.body;
        // const user = await UserModel.findOne({_id: userID});

        // res.json({user, message: "User retrieved successfully :)"});
        console.log(req.body);
    } catch (err) {
        console.error(err);
    }
});



export { router1 as UserRouter };