
interface IReminders {
    [botName:string] : {
        reminders : string
    }
}

export class Reminders {
    private static _reminders: IReminders = {};
    public static getReminders = () => Reminders._reminders;
    public static setReminders = (newReminder: any, botName: string) => {
        Reminders._reminders[botName] = newReminder;
    };
}