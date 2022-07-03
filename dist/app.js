"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const ChadBot_1 = require("./bot/ChadBot");
const TOKEN = process.env.BOT_TOKEN;
const port = process.env.PORT;
const app = (0, express_1.default)();
// parse the updates to JSON
app.use(express_1.default.json());
const bot = new ChadBot_1.ChadBot().getBot();
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
//# sourceMappingURL=app.js.map