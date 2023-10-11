const isAccountSaved = localStorage.getItem("accountSaved");
let savedUsername = localStorage.getItem("username");
const usernameElement = document.getElementById("username");
const userAvatar = document.getElementById("user-avatar");

if (isAccountSaved) {
  if (savedUsername) {
    usernameElement.textContent = `${savedUsername}`;
  }
}
const savedAvatarUrl = localStorage.getItem("avatarUrl");
if (savedAvatarUrl) {
  userAvatar.src = savedAvatarUrl;
} else {
  window.location.href = "/en-us/logout/error";
}

document
  .getElementById("changeUsername")
  .addEventListener("click", function () {
    let newUsername = prompt("Enter your new username:");

    while (newUsername !== null && newUsername.length < 3) {
      alert("Username must be at least 3 characters long.");
      newUsername = prompt("Enter your new username (at least 3 characters):");
    }

    const ownerUsername = "nate-games";
    var ownerPassword = password;

    if (newUsername !== null && newUsername === ownerUsername) {
      const userPassword = prompt(
        "Please enter a password to confirm the change:",
        "Password"
      );
      if (userPassword === ownerPassword) {
        localStorage.setItem("accountSaved", "true");
        localStorage.setItem("username", newUsername);
        window.location.href = "/en-us/account/";
      } else {
        alert("Incorrect password. Username not changed.");
      }
    } else {
      localStorage.setItem("accountSaved", "true");
      localStorage.setItem("username", newUsername);
      window.location.href = "/en-us/account/";
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
