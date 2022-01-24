export const getNoOfDays = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayOfWeek = new Date(year, month).getDay();
  const blankdaysArray = [];
  for (var i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i);
  }
  const daysArray = [];
  for (var i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }
  return {blankdaysArray, daysArray};
};
export const toISODate = (d) => d.toISOString().slice(0, 10);
export const formatOutDefault = (date) => {
  const s = toISODate(date);
  const [y, m, d] = s.split(/-/g);
  return [d, m, y].join("/");
};
