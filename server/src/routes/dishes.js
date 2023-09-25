import express from "express";
import { DishesModel } from "../models/Dishes.js";
import { UserModel } from "../models/User.js";

const router1 = express.Router();

router1.get("/getDishes", async (req, res) => {
    try {
        const dishes = await DishesModel.find({});
        res.json({dishes, message: "Post request recieved :)"});
    }
    catch (err) {
        console.error(err);
    }
});

router1.put("/addtocart", async (req, res) => {
    try {
        const {userID, dishID} = req.body;
        const dish = await DishesModel.findById(dishID)
        const user = await UserModel.findById(userID);
        const cart = user.cart;
        console.log(dish);

        if (cart.includes(dish)){
            res.json({message: "Dish is already present in the cart"});
        } else {
            // user.cart.push(user);
            // await user.save();
            res.json({message: "Dish added to saved Cart Successfully!", cart: user.cart});
        }
        
    } catch (err) {
        console.error(err);
    }
});


router1.post("/cartDishes/ids", async (req, res) => {
    try{
        const user = await UserModel.findById(req.body.userID);
        res.json({savedRecipes: user?.cart});
        console.log(user?.cart);
    } catch (err) {
        res.json(err);
    }
});




export {router1 as DishesRouter};