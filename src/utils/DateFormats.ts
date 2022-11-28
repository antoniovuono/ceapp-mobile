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

export { dateHourFormat, dateStandardFormat, dayOfWeekFormat, getCurrentDate };
