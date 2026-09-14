export const useDateFormat = (date: Date, format: string) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  if (format === "YYYY.MM.DD") {
    return `${year}.${month}.${day}`;
  } else if (format === "DD.MM.YYYY") {
    return `${day}.${month}.${year}`;
  } else {
    return `${year}-${month}-${day}`;
  }
};
