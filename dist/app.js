"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const TOKEN = process.env.BOT_TOKEN;
const url = `https://mojojojoz.herokuapp.com:443`;
const port = process.env.PORT;
// No need to pass any parameters as we will handle the updates with Express
const bot = new node_telegram_bot_api_1.default(TOKEN);
// This informs the Telegram servers of the new webhook.w
bot.setWebHook(`${url}/bot${TOKEN}`);
const app = (0, express_1.default)();
// parse the updates to JSON
app.use(express_1.default.json());
// We are receiving updates at the route below!
app.post(`/bot${TOKEN}`, (req, res) => {
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
//# sourceMappingURL=app.js.map