const Handlebars = require("handlebars");

Handlebars.registerHelper("time", function (property) {
  let newTime = new Date(property);
  let nowTime = new Date();
  let endDate;
  let hours;
  let minutes;
  let seconds;
  let endTime;
  let day;
  let month;
  let dayNow;
  let monthNow;

  if (newTime.getDate() >= 0 && newTime.getDate() <= 9)
    day = `0${newTime.getDate()}`;
  else day = newTime.getDate();

  if (newTime.getMonth() >= 0 && newTime.getMonth() <= 9)
    month = `0${newTime.getMonth() + 1}`;
  else month = newTime.getMonth() + 1;

  if (nowTime.getDate() >= 0 && nowTime.getDate() <= 9)
    dayNow = `0${nowTime.getDate()}`;
  else dayNow = nowTime.getDate();

  if (nowTime.getMonth() >= 0 && nowTime.getMonth() <= 9)
    monthNow = `0${nowTime.getMonth() + 1}`;
  else monthNow = nowTime.getMonth() + 1;

  if (
    `${day}/${month}/${newTime.getFullYear()}` !=
    `${dayNow}/${monthNow}/${nowTime.getFullYear()}`
  )
    endDate = `${day}/${month}/${newTime.getFullYear()}`;

  if (newTime.getHours() >= 0 && newTime.getHours() <= 9)
    hours = `0${newTime.getHours()}`;
  else hours = newTime.getHours();

  if (newTime.getMinutes() >= 0 && newTime.getMinutes() <= 9)
    minutes = `0${newTime.getMinutes()}`;
  else minutes = newTime.getMinutes();

  if (newTime.getSeconds() >= 0 && newTime.getSeconds() <= 9)
    seconds = `0${newTime.getSeconds()}`;
  else seconds = newTime.getSeconds();

  endTime = `${hours}:${minutes}:${seconds}`;

  if (endDate) return `${endDate} ${endTime}`;
  else return endTime;
});
