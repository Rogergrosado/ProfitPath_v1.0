import express from 'express';

const router = express.Router();

// Generate a shipping quote
router.post('/quote', (req, res) => {
  const { from, to, weight } = req.body;
  res.json({ message: 'Shipping quote', from, to, weight });
});

export default router;
