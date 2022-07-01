import { Context, Telegraf, Markup } from 'telegraf';
import { Update } from 'typegram';
import { AdminCache, PRVILEDGED_USERS } from '../utilities';

export class ChadBot {
    private chadBot: Telegraf<Context<Update>> | null = null;
    private chatIDs: number[] = [];
    private name: string | null = null;

    constructor() {
        this.init();
    };
    
    private async init() {
        if (process.env.ENV === 'dev') { 
                this.chadBot = new Telegraf(process.env.BOT_TOKEN_DEV as string);
            }
            else{
                this.chadBot = new Telegraf(process.env.BOT_TOKEN as string);
            }
        
            this.chadBot.use(Telegraf.log());
            
        await this.getName();
        this.chadBot.help(ctx => ctx.reply('say hi'));
        this.chadBot.hears('hi', ctx => ctx.reply(`hello ${ctx.from.username}`));
        this.chadBot.start((ctx) => {
            const chatId = ctx.message.chat.id;
            this.chatIDs.find(id => id == chatId) ?? this.registerChatGroups(chatId)
            ctx.reply(`${this.name} started`);
        });
        
        this.chadBot.launch({
            webhook:{
                domain: process.env.HEROKU_DOMAIN,
                hookPath: `/${process.env.MOJOJOJO_HOOK}`,
                port: process.env.PORT as unknown as number
            }
        }).then(() => console.log(`${this.name} is running`))
        .catch(error => console.log(`ERROR: ${error}`));
    };
    
    /** get reminders from the corresponding chats */
    public getReminder = () => {

    }

    /** set reminder into chat db */
    public setReminder = () => {

    }

    public getName = async () => {
        this.name = this.name ?? (await this.chadBot!.telegram.getMe()).username;
        return this.name;
    };

    protected leave() {
        this.chadBot?.command('leave', async (ctx) => {
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
    public registerChatGroups(chatId:number) {
        this.chatIDs.push(chatId);
    };
}
