import mongoose from "mongoose";

const bloodRequestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  age: { type: Number, required: true },
  hospitalAddress: { type: String, required: true },
  urgency: { type: String, enum: ["normal", "urgent", "emergency"], default: "normal" },
}, { timestamps: true });

const BloodRequest = mongoose.model("BloodRequest", bloodRequestSchema);
export default BloodRequest;
