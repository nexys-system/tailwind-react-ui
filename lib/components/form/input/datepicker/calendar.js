import * as U from "./utils.js";
class Calendar {
  constructor(observedDate) {
    this.isToday = (date) => {
      const today = new Date();
      const d = new Date(this.year, this.month, date);
      return today.toDateString() === d.toDateString();
    };
    this.getDateValue = (date) => {
      const selectedDate = new Date(this.year, this.month, date);
      const refDate = selectedDate.getFullYear() + "-" + ("0" + (selectedDate.getMonth() + 1)).slice(-2) + "-" + ("0" + selectedDate.getDate()).slice(-2);
      return refDate;
    };
    this.month = observedDate.getMonth();
    this.year = observedDate.getFullYear();
    const {blankdaysArray, daysArray} = U.getNoOfDays(this.year, this.month);
    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }
}
export default Calendar;
