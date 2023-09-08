import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    imageURL: {
        type: String,
        required: false
    },
    
    favorites: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"recipes"
    },

    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "recipes"
    },

    admin: {
        type: String,
        required: true,
        default: false
    }

});


export const UserModel = mongoose.model("userTable", UserSchema);
