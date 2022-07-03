import dotenv from 'dotenv';
dotenv.config();
// import express from 'express';
import { ChadBot } from './bot/ChadBot';
import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN
const port = process.env.PORT;

const bot: TelegramBot = new ChadBot().getBot()!;

// Just to ping!
bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});

// greet user
bot.onText(/^hello mojojojo$/i, (msg) => {
  bot.sendMessage(msg.chat.id, `hi ${msg.from?.username}`);
});