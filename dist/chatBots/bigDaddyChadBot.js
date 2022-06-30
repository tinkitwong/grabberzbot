"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigDaddyChadBot = void 0;
const basicChadBot_1 = require("./basicChadBot");
class BigDaddyChadBot extends basicChadBot_1.BasicChadBot {
    constructor() {
        super();
        this.init();
        this.test();
    }
    /** Adds Chat Group ID to class var */
    test() {
        console.log('====================');
        // console.log(JSON.stringify(this.chadBot, null, 4))
        console.log(this.chadBot);
        // get chatID of the specific chat group that the chatBot was just added into
        this.chadBot.command('start', (ctx) => {
            console.log('init function');
            const chatID = ctx.message.chat.id;
            console.log(chatID);
            this.addChatGrp(chatID);
            console.log(this.chadIDs);
        });
    }
}
exports.BigDaddyChadBot = BigDaddyChadBot;
//# sourceMappingURL=bigDaddyChadBot.js.map