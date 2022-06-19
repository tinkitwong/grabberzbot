"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;
class Scheduler {
}
exports.Scheduler = Scheduler;
Scheduler._availableDatetimes = {};
Scheduler.getOverlapSchedules = () => {
    // Logic to handle scheduling of overlapping free datetimes.
};
Scheduler.setMemberSchedule = (uid, availableDatetimes) => {
    Scheduler._availableDatetimes[uid] = availableDatetimes;
};
;
//# sourceMappingURL=scheduler.js.map