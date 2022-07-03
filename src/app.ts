import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ChadBot } from './bot/ChadBot';
import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN
const url = `https://mojojojoz.herokuapp.com:443`;
const port = process.env.PORT;

// No need to pass any parameters as we will handle the updates with Express
const bot = new TelegramBot(TOKEN!);

// This informs the Telegram servers of the new webhook.w
bot.setWebHook(`${url}/bot${TOKEN}`);

const app = express();

// parse the updates to JSON
app.use(express.json());

// We are receiving updates at the route below!
app.post(`/bot${TOKEN}`, (req, res) => {
  console.log('testin /bot route')
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start Express Server
app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});

// Just to ping!
bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});