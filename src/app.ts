import express from 'express';
import dotenv from 'dotenv';
import { Telegraf } from 'telegraf';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const bot  = new Telegraf(process.env.BOT_TOKEN as string);

bot.start(ctx => ctx.reply('bot started'));
bot.help(ctx => ctx.reply('say hi'));
bot.hears('hi', (ctx) => ctx.reply(`hello ${ctx.from.username}`));
bot.launch();