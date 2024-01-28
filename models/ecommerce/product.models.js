import mongoose from "mongoose";

const productSchema  = new mongoose.Schema({
    discription: {
        typeof: String,
        required: true
    },
    name: {
        typeof: String,
        required: true
    },
    productImage: {
      typeof: String,
    },
    price: {
        typeof: Number,
        default: 0
    },
    stock: {
        default: 0,
        typeof: Number
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


} , {timestamps: true});

export const Product = mongoose.model("Product" , productSchema);