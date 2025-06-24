// displayDate.js
const currentDate = new Date(); // Creates a new Date object representing the current date and time.
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}; // Defines formatting options for the date.
const formattedDate = currentDate.toLocaleDateString("en-US", options); // Formats the date string according to the specified locale and options.

// Selects the HTML element with the ID 'dateDisplay' and updates its content.
document.getElementById("dateDisplay").innerHTML = formattedDate;
