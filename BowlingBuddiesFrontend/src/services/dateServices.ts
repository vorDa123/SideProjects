const dateIntoJulian = (date: Date) => {
  //Formula can be found on this link: https://aa.usno.navy.mil/faq/JD_formula
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes() / 60;
  const seconds = date.getSeconds() / 3600;

  let K = year;
  let M = month;
  const I = day;
  const UT = hours + minutes + seconds;

  if (month === 1 || month === 2) {
    K = year - 1;
    M = month + 12;
  }

  const julianDate =
    367 * K -
    Math.floor((7 * (K + Math.floor((M + 9) / 12))) / 4) +
    Math.floor((275 * M) / 9) +
    I +
    1721013.5 +
    UT / 24;

  return julianDate;
};

const julianIntoDate = (julianDate: number) => {
  //Formula can be found in the PDF document referenced on this link: https://aa.usno.navy.mil/faq/JD_formula
  const JD = Math.floor(julianDate + 0.5);
  const f = JD + 1401;
  const f2 = f + Math.floor((((4 * JD + 274277) / 146097) * 3) / 4) - 38;
  const e = 4 * f2 + 3;
  const g = Math.floor((e % 1461) / 4);
  const h = 5 * g + 2;
  const day = Math.floor((h % 153) / 5 + 1);
  const month = Math.floor(((h / 153 + 2) % 12) + 1);
  const year = Math.floor(e / 1461 - 4716 + (12 + 2 - month) / 12);

  const dateFromJulian = new Date(year, month - 1, day);
  
  return dateFromJulian;
};

const getDayName = (dayNumber: number) => {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 0:
      return "Sunday";
    default:
      break;
  }
};

const formatDate = (date: Date, format: string) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (format === "YYYY.MM.DD") {
    return `${year}.${month}.${day}`;
  } else if (format === "DD.MM.YYYY") {
    return `${day}.${month}.${year}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};

export { dateIntoJulian, julianIntoDate, getDayName, formatDate };
