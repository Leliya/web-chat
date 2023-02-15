import { MONTH, WEEK } from "../../data/const";

export function getWeekDay(dayIndex: number): string {
  return WEEK[dayIndex];
}

export function getMonth(monthIndex: number): string {

  return MONTH[monthIndex];
}

export function transformDate(date: string): string {
  const currentDate = new Date();

  const newDate = new Date(date)

  const result = (currentDate.getTime() - newDate.getTime()) / (1000 * 60 * 60 * 24);

  let string = '';



  if (result < 1) {
    return (string = `${newDate.getHours()}:${newDate.getMinutes()}`);
  }

  if (result >= 1 && result <= 7) {
    return (string = getWeekDay(newDate.getDay()));
  }

  if (result > 7) {
    return (string = `${newDate.getDate()} ${getMonth(
      newDate.getMonth()
    )} ${newDate.getFullYear()}`);
  }
  return string;
}
