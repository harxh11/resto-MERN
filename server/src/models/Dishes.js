import mongoose, { mongo } from "mongoose";

const DishesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        required: false,
        default: 0
    },

    description: {
        type: String,
        required: true
    },

    cookingTime: {
        type: Number,
        required: true
    }, 

    veg: {
        type: Boolean,
        required: true
    }

});


export default DishesSchema = mongoose.model("dishes", DishesModel);