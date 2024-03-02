import moment from 'moment';

export const daysInYear = () => moment().endOf('year').dayOfYear();
