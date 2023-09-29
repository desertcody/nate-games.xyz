const isAccountSaved = localStorage.getItem('accountSaved');
const savedUsername = localStorage.getItem('username');

if (isAccountSaved) {
  if (savedUsername) {
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = `${savedUsername}`;
  }
} else {
  window.location.href = '/en-us/signup/';
}

document.getElementById("revealLevel").addEventListener("click", function () {
  var level = document.querySelector("#levelContent");
  if (level.style.display === "none" || level.style.display === "") {
    level.style.display = "block";
  } else {
    level.style.display = "none";
  }
});
