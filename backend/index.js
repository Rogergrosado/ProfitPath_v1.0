// /backend/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('🚀 ProfitPath Backend is running');
});

app.listen(PORT, () => {
  console.log(`✅ Backend listening at http://localhost:${PORT}`);
});

