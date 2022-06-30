import express from 'express';
import dotenv from 'dotenv';
import { ChadBot } from './bot/ChadBot';

dotenv.config();

const app = express();
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

new ChadBot();
