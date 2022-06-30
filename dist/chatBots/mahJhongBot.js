"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MahjongBot = void 0;
const basicChadBot_1 = require("./basicChadBot");
class MahjongBot extends basicChadBot_1.BasicChadBot {
    constructor(chatID) {
        super();
    }
    ;
    getName() {
        return 'MahjongChadBot';
    }
    ;
    help() {
        this.chadBot.help((ctx) => {
            ctx.reply('Send /start to init bot');
            ctx.reply('Send /keyboard to receive a message with a keyboard');
            ctx.reply('Send /quit to stop bot');
        });
    }
}
exports.MahjongBot = MahjongBot;
//# sourceMappingURL=mahJhongBot.js.map