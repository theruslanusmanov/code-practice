/**
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 * @param seconds
 * @returns {string}
 */
export function humanReadable (seconds) {
  let secondsRest = seconds;
  const hours = (Math.trunc((secondsRest / (60 * 60)))).toLocaleString('en-US', {minimumIntegerDigits: 2});
  secondsRest -= hours * 60 * 60;
  const minutes = (Math.trunc(secondsRest / 60)).toLocaleString('en-US', {minimumIntegerDigits: 2});
  secondsRest = (secondsRest - minutes * 60).toLocaleString('en-US', {minimumIntegerDigits: 2});
  return `${hours}:${minutes}:${secondsRest}`;
}
