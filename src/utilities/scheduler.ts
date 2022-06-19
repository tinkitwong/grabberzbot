type TAvailableDatetimes = {
    [uid:number]: string[]
}

export class Scheduler {
    private static _availableDatetimes: TAvailableDatetimes = {};
    
    public static getOverlapSchedules = () => {
        // Logic to handle scheduling of overlapping free datetimes.
    };
    public static setMemberSchedule = (uid: number, availableDatetimes: string[]) => {
        Scheduler._availableDatetimes[uid] = availableDatetimes;
    };
};