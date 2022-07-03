"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// import express from 'express';
const ChadBot_1 = require("./bot/ChadBot");
const TOKEN = process.env.BOT_TOKEN;
const port = process.env.PORT;
const bot = new ChadBot_1.ChadBot().getBot();
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
//# sourceMappingURL=app.js.map