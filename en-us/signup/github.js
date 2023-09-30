const tokenInput = document.getElementById('token-input');
const Login = document.getElementById('login-button');
const usernameContainer = document.getElementById('username-container');
const usernameElement = document.getElementById('username');
const githubButton = document.querySelector('#GithubSignUp');
const githubAuth = document.querySelector('#GithubAuth');

Login.addEventListener('click', () => {
    const accessToken = tokenInput.value.trim();

    if (!accessToken) {
        alert("Please enter your GitHub Personal Access Token.");
        return;
    }

    fetch('https://api.github.com/user', {
        headers: {
            'Authorization': `token ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(user => {
        usernameElement.textContent = user.login;
        usernameContainer.style.display = 'block';
    })
    .catch(error => {
        alert("Error fetching username. Please check your Personal Access Token.");
        console.error(error);
    });
});

githubButton.addEventListener('click', function () {
    if (githubAuth.style.display === 'block') {

        githubAuth.style.display = 'none';
    } else {
        githubAuth.style.display = 'block';
    }
  });