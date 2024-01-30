import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
      typeof: Number,
      required: true
    }
})

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
        typeof: [orderItemsSchema]
    },
    address: {
        typeof: String,
        require: true
    },
    status: {
        typeof: String,
        enum: ["PENDING" , "CANCELLED" , "DELIVERED"],
        default: "PENDING"
    }

} , {timestamps: true});

export const Order = mongoose.model("Order" , orderSchema);