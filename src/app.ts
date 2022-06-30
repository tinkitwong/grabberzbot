import express from 'express';
import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';
import { ChadBot } from './chats';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

new ChadBot();
