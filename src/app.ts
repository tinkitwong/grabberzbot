import express from 'express';
import dotenv from 'dotenv';
import { ChadBot } from './bot/ChadBot';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT as number, () => {
    console.log(`Server running on port ${PORT}`);
});

new ChadBot();
