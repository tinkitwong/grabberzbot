import { Context, Telegraf, Markup } from 'telegraf';
import { Update } from 'typegram';
import { AdminCache, PRVILEDGED_USERS } from '../utilities';

export class ChadBot {
    protected chadBot: Telegraf<Context<Update>>;
    protected chatIDs: number[];
    protected name: string | null = null;

    constructor() {
        this.chadBot = new Telegraf(process.env.BOT_TOKEN as string);
        this.chatIDs = [];
        this.start();
    };

    public getName = async () => {
        this.name = this.name ?? (await this.chadBot.telegram.getMe()).username;
        return this.name;
    };

    public async start() {
        await this.getName();
        this.chadBot.help(ctx => ctx.reply('say hi'));
        this.chadBot.hears('hi', ctx => ctx.reply(`hello ${ctx.from.username}`));
        this.chadBot.start((ctx) => {
            ctx.reply(`${this.name} started`);
        });
        this.chadBot.launch();
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
        this.chatIDs.push(chatID);
    };
}
