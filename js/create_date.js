const dateString = "2023-04-26T18:39:15Z";
const event = new Date(dateString);
const formattedDateString = event.toString();
const isoString = event.toISOString();
const createText = document.getElementById("createText");
createText.textContent = formattedDateString;
console.log(formattedDateString);
console.log(isoString);
