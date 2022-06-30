"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reminders = void 0;
class Reminders {
}
exports.Reminders = Reminders;
Reminders._reminders = {};
Reminders.getReminders = () => Reminders._reminders;
Reminders.setReminders = (newReminder, botName) => {
    Reminders._reminders[botName] = newReminder;
};
//# sourceMappingURL=reminderCache.js.map