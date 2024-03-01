export const daysInYear = (date: Date) => {
  return isLeapYear(date.getFullYear()) ? 366 : 365;
};

export const isLeapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
