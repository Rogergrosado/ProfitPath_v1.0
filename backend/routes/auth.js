import express from 'express';
import { verifyFirebaseToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/me', verifyFirebaseToken, (req, res) => {
  res.json({ message: 'Authenticated', user: req.user });
});

export default router;
