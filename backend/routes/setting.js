import express from 'express';

const router = express.Router();

// Get application settings
router.get('/', (req, res) => {
  res.json({ message: 'Get settings' });
});

// Update application settings
router.post('/', (req, res) => {
  const settings = req.body;
  res.json({ message: 'Settings saved', settings });
});

export default router;
