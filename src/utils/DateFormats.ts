import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const dateHourFormat = (date: string) => {
  return dayjs(date).format('DD-MM-YYYY HH:mm');
};

const dateStandardFormat = (date: Date) => {
  return dayjs(date).format('DD-MM-YYYY');
};

const dayOfWeekFormat = (date: Date) => {
  return dayjs(date).locale('pt-br').format('dddd');
};

const getCurrentDate = () => {
  return dayjs().toDate();
};

const getCurrentYear = (date: Date) => {
  const currentYear = Intl.DateTimeFormat('pt-br', {
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);

  return currentYear;
};

const addOneYear = (year: number) => {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  year += 1;

  return year;
};

const subtractOneYear = (year: number) => {
  year -= 1;

  return year;
};

const getMonthAndYear = (date: any) => {
  const result = Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));

  return result;
};

const getMonth = (date: any) => {
  const result = Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(date));

  return result;
};

export {
  dateHourFormat,
  dateStandardFormat,
  dayOfWeekFormat,
  getCurrentDate,
  getCurrentYear,
  addOneYear,
  subtractOneYear,
  getMonthAndYear,
  getMonth,
};
