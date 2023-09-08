// Function to update the current day of the week in Nigeria (WAT time zone)
function updateCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const options = { weekday: "long", timeZone: "Africa/Lagos" }; // Nigeria's time zone
  const currentDay = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    currentDay;
}

// Initial update
updateCurrentDayOfTheWeek();

// Update the current day of the week every 24 hours
setInterval(updateCurrentDayOfTheWeek, 86400000);

// Function to update the current local time in Nigeria (WAT time zone)
function updateTime() {
  const date = new Date();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const utcTimeMilliseconds = date.getTime();
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `${hours}:${minutes}:${seconds} || UTC Time(ms) ${utcTimeMilliseconds}`;
}

setInterval(updateTime, 500);
