import TelegramBot from 'node-telegram-bot-api';


export class ChadBot {
    private chadBot: TelegramBot | null = null;
    private chatIDs: number[] = [];
    private name: string | null = null;

    constructor() {
        this.init();
    };
    
    private async init() {
        if (process.env.ENV === 'dev') { 
                console.log('in init() dev')
                this.chadBot = new TelegramBot(process.env.BOT_TOKEN_DEV as string);
                // this.chadBot.on('message', (msg) => {
                //     console.log('test');
                //     console.log(this.chadBot)
                //     this.chadBot?.sendMessage(msg.chat.id, 'received msg')
                // });
            }
            else {
                this.chadBot = new TelegramBot(process.env.BOT_TOKEN as string, {
                    webHook: {
                        port: process.env.PORT as unknown as number
                    }
                });
                this.chadBot.setWebHook(`https://mojojojoz.herokuapp.com:443/bot/${process.env.BOT_TOKEN}`);

            }
    
    };
    
    public getBot = () => {
        return this.chadBot;
    }

    /** get reminders from the corresponding chats */
    public getReminder = () => {

    }

    /** set reminder into chat db */
    public setReminder = () => {

    }

    public getName = async () => {
    };

    protected leave = () => {}

    /** Adds Chat Group ID to class var */
    protected registerChat = () => {}
}
