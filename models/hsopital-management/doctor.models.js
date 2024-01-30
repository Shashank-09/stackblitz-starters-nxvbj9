import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    
} , {timestamps: true});

export default Doctor = mongoose.model("Doctor" , doctorSchema);