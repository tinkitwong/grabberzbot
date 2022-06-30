"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigDaddyChadBot = void 0;
const telegraf_1 = require("telegraf");
const utilities_1 = require("../utilities");
class BigDaddyChadBot {
    constructor() {
        this.chadBot = new telegraf_1.Telegraf(process.env.BDADDY_BOT_TOKEN);
        this.chadIDs = [];
        // Cleanup
        process.once('SIGINT', () => this.chadBot.stop('SIGINT'));
        this.start();
    }
    ;
    getBotName() {
        return 'BigDaddyChadBot';
    }
    ;
    start() {
        this.chadBot.start((ctx) => {
            const uid = ctx.message.from.id;
            const chatID = ctx.message.chat.id;
            console.log('test');
            console.log(uid);
            console.log(chatID);
            ctx.reply('helo');
        });
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
        this.chadIDs.push(chatID);
    }
    ;
}
exports.BigDaddyChadBot = BigDaddyChadBot;
//# sourceMappingURL=bigDaddyChadBot.js.map