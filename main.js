const root = document.getElementById("root");
const currentDate = new Date();
const targetDate = new Date("06/24/2021");

// To calculate the no. of days between two dates
const daysRemaining = Math.ceil(
	(targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
);

root.textContent = ` ${daysRemaining} days till end of semester`;
