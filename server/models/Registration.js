import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bloodGroup: { type: String, required: true },
  description: { type: String },
  bloodReport: { type: String, required: true }, // File path
  createdAt: { type: Date, default: Date.now },
});

const Registration = mongoose.model("Registration", registrationSchema);
export default Registration;
