import dotenv from 'dotenv';
dotenv.config();
// import express from 'express';
import { ChadBot } from './bot/ChadBot';
import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.BOT_TOKEN
const port = process.env.PORT;

const bot: TelegramBot = new ChadBot().getBot()!;
// const bot = new TelegramBot(process.env.BOT_TOKEN as string, {
//   webHook: {
//     port: port as unknown as number
//   }
// });
// bot.setWebHook(`https://mojojojoz.herokuapp.com:443/bot/${process.env.BOT_TOKEN}`);

// Just to ping!
bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});