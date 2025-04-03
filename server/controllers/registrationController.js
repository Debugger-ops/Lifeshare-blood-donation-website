import Registration from "../models/Registration.js";

// Submit registration
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode,
      gender,
      dob,
      bloodGroup,
      description,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Blood report is required" });
    }

    const newRegistration = new Registration({
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode,
      gender,
      dob,
      bloodGroup,
      description,
      bloodReport: req.file.path, // Save file path
    });

    await newRegistration.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again" });
  }
};

// Get all registrations
export const getRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch registrations" });
  }
};
