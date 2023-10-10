const tokenInput = document.getElementById("token-input");
const Login = document.getElementById("login-button");
const usernameContainer = document.getElementById("username-container");
const usernameElement = document.getElementById("username");
const userAvatar = document.getElementById("user-avatar");
const githubButton = document.querySelector("#GithubSignUp");
const githubAuth = document.querySelector("#GithubAuth");

Login.addEventListener("click", () => {
  const accessToken = tokenInput.value.trim();

  if (!accessToken) {
    alert("Please enter your GitHub Personal Access Token.");
    return;
  }

  fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Invalid Personal Access Token");
      }
    })
    .then((user) => {
      usernameElement.textContent = user.login;

      const avatarUrl = user.avatar_url;
      userAvatar.src = avatarUrl;

      usernameContainer.style.display = "block";

      localStorage.setItem("accountSaved", "true");
      localStorage.setItem("username", user.login);
      localStorage.setItem("avatarUrl", avatarUrl);

      if (localStorage.getItem("accountSaved") === "true") {
        window.location.href = "/en-us/account/";
      }
    })
    .catch((error) => {
      alert("Please check your Personal Access Token.");
      console.error(error);
    });
});


githubButton.addEventListener("click", function () {
  if (githubButton.style.display === "block") {
    githubAuth.style.display = "none";
  } else {
    githubAuth.style.display = "block";
  }
});
