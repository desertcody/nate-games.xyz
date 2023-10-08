const htmlBody = document.body;
const navBar = document.getElementById("header");

function LightMode() {
  htmlBody.classList.toggle("light-mode");
  navBar.classList.toggle("light-mode");
  themeSwitch.textContent = "Toggle Dark Mode";
}

function DarkMode() {
  htmlBody.classList.toggle("dark-mode");
  navBar.classList.toggle("dark-mode");
  themeSwitch.textContent = "Toggle Light Mode";
}
let currentFunction = 1;

document.getElementById("themeSwitch").addEventListener("click", function () {
  if (currentFunction === 1) {
    LightMode();
    currentFunction = 2;
  } else {
    DarkMode();
    currentFunction = 1;
  }
});
