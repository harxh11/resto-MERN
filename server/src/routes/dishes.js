import express from "express";
import { DishesModel } from "../models/Dishes.js";


const router1 = express.Router();

router1.get("/getDishes", async (req, res) => {
    try {
        const dishes = await DishesModel.find({});
        res.json({dishes, message: "Post request recieved :)"});
    }
    catch (err) {
        console.error(err);
    }
})


export {router1 as DishesRouter};