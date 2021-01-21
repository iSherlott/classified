const Handlebars = require("handlebars");

Handlebars.registerHelper("time", function (property) {
  time = new Date(property);
  let newTime;
  let nowDate = new Date();

  if (
    time.getDate() == nowDate.getDate() &&
    time.getMonth() == nowDate.getMonth() &&
    time.getFullYear() == nowDate.getFullYear()
  ) {
    newTime =
      time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  } else {
    newTime =
      time.getDate() +
      "/" +
      (time.getMonth() + 1) +
      "/" +
      time.getFullYear() +
      " " +
      time.getHours() +
      ":" +
      time.getMinutes() +
      ":" +
      time.getSeconds();
  }
  return newTime;
});
