"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrabberzBot = void 0;
const basicChadBot_1 = require("./basicChadBot");
class GrabberzBot extends basicChadBot_1.BasicChadBot {
    constructor() {
        super();
    }
    ;
    getName() {
        return 'grabberzbot';
    }
    ;
    help() {
        this.chadBot.help((ctx) => {
            ctx.reply('Send /start to init bot');
            ctx.reply('Send /keyboard to receive a message with a keyboard');
            ctx.reply('Send /quit to stop bot');
        });
    }
    ;
}
exports.GrabberzBot = GrabberzBot;
//# sourceMappingURL=grabberzBot.js.map