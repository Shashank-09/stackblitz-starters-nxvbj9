import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    addressLine1: {
       type: String,
       required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
     },
     pinCode: {
        type: String,
        required: true
     },
     specializied: [
        {
            type: String,
        }
     ]

} , {timestamps: true});

export default Hospital = mongoose.model("Hospital" , hospitalSchema);