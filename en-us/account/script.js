const isAccountSaved = localStorage.getItem('accountSaved');
let savedUsername = localStorage.getItem('username');
const usernameElement = document.getElementById('username');

if (isAccountSaved) {
    if (savedUsername) {
        usernameElement.textContent = `${savedUsername}`;
    }
} else {
    window.location.href = '/en-us/signup/';
}

document.getElementById("changeUsername").addEventListener("click", function () {
    const newUsername = prompt("Enter your new username:");
    if (newUsername !== null && newUsername !== "") {
        localStorage.setItem('username', newUsername);
        savedUsername = newUsername;
        usernameElement.textContent = newUsername;
    }
});

document.getElementById("revealLevel").addEventListener("click", function () {
    var level = document.querySelector("#levelContent");
    if (level.style.display === "none" || level.style.display === "") {
        level.style.display = "block";
    } else {
        level.style.display = "none";
    }
});