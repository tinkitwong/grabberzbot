"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicChadBot = void 0;
const telegraf_1 = require("telegraf");
const utilities_1 = require("../utilities");
class BasicChadBot {
    constructor() {
        this.chadBot = new telegraf_1.Telegraf(process.env.BDADDY_BOT_TOKEN);
        this.chadIDs = [];
        // Cleanup
        process.once('SIGINT', () => this.chadBot.stop('SIGINT'));
    }
    ;
    /** Override this to return BotName */
    getBotName() {
        return 'BigDaddyChadBot';
    }
    /** Override this to init bot for the particular chat */
    init() {
        // this.chadBot.start(async (ctx) => {
        //     ctx.reply('Hello ' + ctx.from.first_name + '!');
        //     const chatID = ctx.message.chat.id;
        //     const uid = ctx.message.from.id;
        //     const date = new Date().toISOString();
        //     const chatAdmins = await ctx.telegram.getChatAdministrators(chatID);
        //     const chatMember = await ctx.telegram.getChatMember(chatID, uid);
        //     if (!(chatMember.status.toUpperCase() in PRVILEDGED_USERS)) { // not admin
        //         ctx.reply(`Don't be naughty ${ctx.from.first_name}, you ain't no admin!`); // TODO: Send gif instead.    
        //     }
        //     else {
        //         AdminCache.setAdmins({
        //             timestamp: date,
        //             adminMembers: chatAdmins
        //         });
        //         ctx.reply(`init completed`);
        //     }
        // });
    }
    /** Override this to list out help menu */
    help() {
        this.chadBot.help(() => { });
    }
    /** Override this to add new chatgroup to BigDaddyChadBot */
    addChatGrp(chatID) {
        this.chadIDs.push(chatID);
    }
    /** Override this for BigDaddy to leave chat */
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
}
exports.BasicChadBot = BasicChadBot;
//# sourceMappingURL=basicChadBot.js.map