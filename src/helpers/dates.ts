export function getMinutes(str) {
  const time = str.split(':');
  return time[0] * 60 + time[1] * 1;
}
export function getMinutesNow() {
  const timeNow = new Date();
  // timeNow.setHours(timeNow.getHours() + 4);
  // console.log('timeNow', timeNow.getHours());
  return timeNow.getHours() * 60 + timeNow.getMinutes();
}
