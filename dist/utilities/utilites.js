"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessThanOneHourAgo = void 0;
const moment_1 = __importDefault(require("moment"));
const lessThanOneHourAgo = (date) => {
    return (0, moment_1.default)(date).isAfter((0, moment_1.default)().subtract(1, 'hours'));
};
exports.lessThanOneHourAgo = lessThanOneHourAgo;
//# sourceMappingURL=utilites.js.map