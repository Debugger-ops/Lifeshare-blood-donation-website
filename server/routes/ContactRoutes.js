import express from 'express';
import { submitContactForm, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// Contact form routes
router.post('/', submitContactForm);
router.get('/', getContacts);

export default router;
