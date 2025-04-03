import BloodRequest from "../models/BloodRequest.js";

export const submitBloodRequest = async (req, res) => {
  try {
    const { patientName, phone, bloodGroup, age, hospitalAddress, urgency } = req.body;

    if (!patientName || !phone || !bloodGroup || !age || !hospitalAddress || !urgency) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRequest = new BloodRequest({ patientName, phone, bloodGroup, age, hospitalAddress, urgency });
    await newRequest.save();

    res.status(201).json({ message: "Blood request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};