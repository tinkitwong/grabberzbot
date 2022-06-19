"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const utilities_1 = require("./utilities");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
bot.start(async (ctx) => {
    ctx.reply('Hello ' + ctx.from.first_name + '!');
    const chatID = ctx.message.chat.id;
    const uid = ctx.message.from.id;
    const date = new Date().toISOString();
    const chatAdmins = await ctx.telegram.getChatAdministrators(chatID);
    const chatMember = await ctx.telegram.getChatMember(chatID, uid);
    if (!(chatMember.status.toUpperCase() in utilities_1.PRVILEDGED_USERS)) { // not admin
        ctx.reply(`Don't be naughty ${ctx.from.first_name}, you ain't no admin!`); // TODO: Send gif instead.    
    }
    else {
        utilities_1.AdminCache.setAdmins({
            timestamp: date,
            adminMembers: chatAdmins
        });
        ctx.reply(`init completed`);
    }
});
bot.help((ctx) => {
    ctx.reply('Send /start to init bot');
    ctx.reply('Send /keyboard to receive a message with a keyboard');
    ctx.reply('Send /quit to stop bot');
});
bot.command('quit', async (ctx) => {
    const uid = ctx.message.from.id;
    const chatID = ctx.message.chat.id;
    const chatMember = await ctx.telegram.getChatMember(chatID, uid);
    if (utilities_1.AdminCache.isAdmin(chatMember)) {
        ctx.telegram.leaveChat(ctx.message.chat.id);
        // ctx.leaveChat();
    }
    else {
        ctx.reply(`🛑 Sir stop sir! yes you ${ctx.from.first_name}, this is my no no square 🛑 `);
    }
});
bot.command('scheduler', async (ctx) => {
    ctx.reply('Enter 3 dates when you are free in this format: STARTIME -> ENDTIME\nFORMAT: MM/DD/YYYY H:M AM/PM');
});
bot.on('message', async (ctx, event) => {
    // Grab dates of when each user is free
    // Grab time of when each user is free on that date
    // Logic to show overlapping time
    // const uid = ctx.message.from.id;
    // const chatID = ctx.message.chat.id;
    // const chatMember = await ctx.telegram.getChatMember(chatID, uid);
    // console.log('testsets')
    // console.log(evt)
});
bot.on('text', (ctx) => {
    ctx.reply('You choose the ' +
        (ctx.message.text === 'first' ? 'First' : 'Second') +
        ' Option!');
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));
app.get('/', (req, res) => {
    res.send('waddap');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map