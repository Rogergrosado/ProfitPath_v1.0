// /backend/middleware/auth.js
import { adminAuth } from '../utils/firebaseAdmin.js';

export async function verifyFirebaseToken(req, res, next) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    req.user = decoded; // Attach user data to request
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

