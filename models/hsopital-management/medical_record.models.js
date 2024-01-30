import mongoose from "mongoose"

const medicalrecordSchema = new mongoose.Schema({
    
} , {timestamps: true});

export default MedicalRecord = mongoose.model("MedicalRecord" , medicalrecordSchema);