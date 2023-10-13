const tokenInput = document.getElementById("token-input");
const githubButton = document.querySelector("#GithubSignUp");
const githubAuth = document.querySelector("#GithubAuth");

tokenInput.addEventListener("keypress", () => {
  if (event.key === "Enter") {
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
        localStorage.setItem("accountSaved", "true");
        localStorage.setItem("username", user.login);
        localStorage.setItem("avatarUrl", user.avatar_url);

        if (localStorage.getItem("accountSaved") === "true") {
          window.location.href = "/en-us/account/";
        }
      })
      .catch((error) => {
        alert("Please check your Personal Access Token.");
        console.error(error);
      });
  }
});

githubButton.addEventListener("click", function () {
  if (githubAuth.style.display === "block") {
    githubAuth.style.display = "none";
  } else {
    githubAuth.style.display = "block";
  }
});

document.body.onload = isAccountSaved();

function isAccountSaved() {
  if (localStorage.getItem("accountSaved") === "true") {
    window.location.href = "/en-us/account/";
  }
}