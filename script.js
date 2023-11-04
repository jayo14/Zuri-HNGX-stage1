//Current date
const currentDate = new Date();

// Days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Current Day of the Week
const currentDay = daysOfWeek[currentDate.getUTCDay()];


//Current UTC time
const currentUTCTime = currentDate.toISOString().substr(11, 8);


//HTML elements with the data-testid attributes
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
