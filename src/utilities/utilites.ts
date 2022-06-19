import moment from 'moment';

export const lessThanOneHourAgo = (date: string) => {
    return moment(date).isAfter(moment().subtract(1, 'hours'));
}