import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bloodRequestRoutes from './routes/BloodRequestRoutes.js';

import contactRoutes from './routes/ContactRoutes.js';
import registrationRoutes from './routes/RegistrationRoutes.js'; // ✅ Use registration route

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/blood-request', bloodRequestRoutes);
app.use('/api/registration', registrationRoutes); // ✅ Added missing route

// Health check route
app.get('/', (req, res) => {
  res.send('LifeShare API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
