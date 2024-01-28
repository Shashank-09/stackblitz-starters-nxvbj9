import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({ 
    orderPrice: {
        typeof: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        
    }

} , {timestamps: true});

export const Order = mongoose.model("Order" , orderSchema);