"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChadBot = void 0;
const telegraf_1 = require("telegraf");
const utilities_1 = require("../utilities");
class ChadBot {
    constructor() {
        this.name = null;
        this.getName = async () => {
            this.name = this.name ?? (await this.chadBot.telegram.getMe()).username;
            return this.name;
        };
        this.chadBot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
        this.chatIDs = [];
        this.start();
    }
    ;
    async start() {
        await this.getName();
        this.chadBot.help(ctx => ctx.reply('say hi'));
        this.chadBot.hears('hi', ctx => ctx.reply(`hello ${ctx.from.username}`));
        this.chadBot.start((ctx) => {
            ctx.reply(`${this.name} started`);
        });
        this.chadBot.launch();
    }
    ;
    leave() {
        this.chadBot.command('leave', async (ctx) => {
            const uid = ctx.message.from.id;
            const chatID = ctx.message.chat.id;
            const chatMember = await ctx.telegram.getChatMember(chatID, uid);
            if (utilities_1.AdminCache.isAdmin(chatMember)) {
                ctx.telegram.leaveChat(ctx.message.chat.id);
            }
            else {
                ctx.reply(`🛑 Sir stop sir! yes you ${ctx.from.first_name}, this is my no no square 🛑 `);
            }
        });
    }
    ;
    /** Adds Chat Group ID to class var */
    addChatGrp(chatID) {
        this.chatIDs.push(chatID);
    }
    ;
}
exports.ChadBot = ChadBot;
//# sourceMappingURL=ChadBot.js.map