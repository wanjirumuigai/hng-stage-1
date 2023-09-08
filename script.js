function dayOftheWeek() {
  const currentDate = new Date();
  const weekdays = { weekday: "long", timeZone: "Africa/Nairobi" };
  const currentDay = new Intl.DateTimeFormat("en-US", weekdays).format(
    currentDate
  );
  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day: ${currentDay}`;
}

dayOftheWeek();

setInterval(dayOftheWeek, 86400000);

function updateLocalTime() {
  const currentDate = new Date();
  const weekdays = { timeZone: "Africa/Nairobi" };
  const localTime = currentDate.toLocaleTimeString("en-US", weekdays);
  const utcTimeMs = currentDate.getTime(); // Get UTC time in milliseconds
  const output =
    "Local Time: " + localTime + "<br>" + "UTC Time (ms): " + utcTimeMs;
  document.querySelector('[data-testid="currentUTCTime"]').innerHTML = output;
}

updateLocalTime();

// Update the current local time
setInterval(updateLocalTime, 1000);
