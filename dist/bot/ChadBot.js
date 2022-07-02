"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChadBot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
class ChadBot {
    constructor() {
        this.chadBot = null;
        this.chatIDs = [];
        this.name = null;
        this.getBot = () => {
            return this.chadBot;
        };
        /** get reminders from the corresponding chats */
        this.getReminder = () => {
        };
        /** set reminder into chat db */
        this.setReminder = () => {
        };
        this.getName = async () => {
        };
        this.leave = () => { };
        /** Adds Chat Group ID to class var */
        this.registerChat = () => { };
        this.init();
    }
    ;
    async init() {
        const options = {
            webHook: {
                port: process.env.PORT,
            }
        };
        if (process.env.ENV === 'dev') {
            this.chadBot = new node_telegram_bot_api_1.default(process.env.BOT_TOKEN_DEV);
            console.log('testing');
            this.chadBot.on('message', (msg) => {
                console.log('test');
                console.log(this.chadBot);
                this.chadBot?.sendMessage(msg.chat.id, 'received msg');
            });
        }
        else {
            this.chadBot = new node_telegram_bot_api_1.default(process.env.BOT_TOKEN, options);
            this.chadBot.setWebHook(`https://mojojojoz.herokuapp.com:443/bot/${process.env.BOT_TOKEN}`);
        }
    }
    ;
}
exports.ChadBot = ChadBot;
//# sourceMappingURL=ChadBot.js.map