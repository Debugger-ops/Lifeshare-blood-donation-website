import express from 'express'; // Import express
import { submitBloodRequest } from '../controllers/bloodRequestController.js';

const router = express.Router(); // Initialize the router

// Route to create a new blood request
router.post('/', submitBloodRequest);

export default router; // Export the router