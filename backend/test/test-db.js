// /backend/test/test-db.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Debug: show where we're loading from
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('Running from:', __dirname);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
console.log('Loaded DB URL:', process.env.DATABASE_URL);

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function test() {
  const users = await prisma.user.findMany();
  console.log('Users:', users);
  await prisma.$disconnect();
}

test().catch((e) => {
  console.error(e);
  process.exit(1);
});
