import { Context, Telegraf, Markup } from 'telegraf';
import { Update } from 'typegram';
import { AdminCache, PRVILEDGED_USERS } from '../utilities';

export class BigDaddyChadBot {
    protected chadBot: Telegraf<Context<Update>>;
    protected chadIDs: number[];

    constructor() {
        this.chadBot = new Telegraf(process.env.BDADDY_BOT_TOKEN as string);
        this.chadIDs = [];

        // Cleanup
        process.once('SIGINT', () => this.chadBot.stop('SIGINT'));
        this.start();
    };

    public getBotName(): string {
        return 'BigDaddyChadBot';
    };

    public start() {
        this.chadBot.start((ctx) => {
            const uid = ctx.message.from.id;
            const chatID = ctx.message.chat.id;
            console.log('test')
            console.log(uid)
            console.log(chatID)
            ctx.reply('helo')
        });
    };

    protected leave() {
        this.chadBot.command('leave', async (ctx) => {
            const uid = ctx.message.from.id;
            const chatID = ctx.message.chat.id;
            const chatMember = await ctx.telegram.getChatMember(chatID, uid);
            if (AdminCache.isAdmin(chatMember)) {
                ctx.telegram.leaveChat(ctx.message.chat.id);
            } else {
                ctx.reply(`🛑 Sir stop sir! yes you ${ctx.from.first_name}, this is my no no square 🛑 `)
            }
        });
    };

    /** Adds Chat Group ID to class var */
    protected addChatGrp(chatID: number) {
        this.chadIDs.push(chatID);
    };
}
