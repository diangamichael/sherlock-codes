/**
 * *Calculate and return the number of days between two dates as a string.
 * *Dates may be in any combination of ISO, short or long formats.
 * @param {date} start
 * @param {date} end
 * @returns {string}
 */

function daysBetween (start, end) {
  startDay = String(new Date(start)).split(' ')[2];
  endDay = String(new Date(end)).split(' ')[2];

  return String(endDay - startDay);
}
