import express from 'express';

const router = express.Router();

// List products
router.get('/', (req, res) => {
  res.json({ message: 'List of products' });
});

// Create a new product
router.post('/', (req, res) => {
  const product = req.body;
  res.status(201).json({ message: 'Product created', product });
});

export default router;
