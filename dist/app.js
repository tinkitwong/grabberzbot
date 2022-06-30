"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const telegraf_1 = require("telegraf");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start(ctx => ctx.reply('bot started'));
bot.help(ctx => ctx.reply('say hi'));
bot.hears('hi', (ctx) => ctx.reply(`hello ${ctx.from.username}`));
bot.launch();
//# sourceMappingURL=app.js.map