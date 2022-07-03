import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ChadBot } from './bot/ChadBot';
import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN
const port = process.env.PORT;

const app = express();
// parse the updates to JSON
app.use(express.json());
const bot: TelegramBot = new ChadBot().getBot()!;

// We are receiving updates at the route below!
app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});

// Just to ping!
bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});