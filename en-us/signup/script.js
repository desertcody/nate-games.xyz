const isAccountSaved = localStorage.getItem('accountSaved');

if (isAccountSaved) {
  window.location.href = '/en-us/account/';
  if (savedUsername) {
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = `Welcome, ${savedUsername}!`;
  }
}

if (isAccountSaved) {
} else {
  const signIn = document.querySelector('#ManualAuth');

  function signUp() {
    signIn.style.display = 'block';
  }

  function SaveSignUp() {
    const usernameInput = document.getElementById('usernameInput').value;
    localStorage.setItem('accountSaved', 'true');
    localStorage.setItem('username', usernameInput);
    signIn.style.display = 'none';
    window.location.href = '/en-us/account/';
  }

  const githubSignInLink = document.getElementById('githubSignInLink');
  githubSignInLink.href = 'https://github.com/login?return_to=/en-us/account';
}
