// /backend/routes/secure.js
import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';

const router = express.Router();

// Protected route
router.get('/secure-endpoint', verifyFirebaseToken, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
});

export default router;
