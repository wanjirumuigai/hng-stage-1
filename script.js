var date = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = weekday[date.getDay()];
document.getElementById("txtStartDate").innerHTML = day;

document.getElementById("time").innerHTML +=
  date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
