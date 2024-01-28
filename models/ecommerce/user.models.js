import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        typeof: String,
        requireed: true,
        unique: true,
        lowercase: true,   
    },
    email: {
        typeof: String,
        requireed: true,
        unique: true,
        lowercase: true
    },
    password: {
        typeof: String,
        required: true
    }

} , {timestamps: true});

export const User = mongoose.model("User" , userSchema);