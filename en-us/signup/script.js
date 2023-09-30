const isAccountSaved = localStorage.getItem('accountSaved');
const error = document.getElementById('error');

if (isAccountSaved) {
  window.location.href = '/en-us/account/';
  const savedUsername = localStorage.getItem('username');
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
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordInputOnly = document.getElementById('passwordInput');

    if (usernameInput === 'nate-games') {
      if (passwordInput === password) {
        localStorage.setItem('accountSaved', 'true');
        localStorage.setItem('username', usernameInput);
        signIn.style.display = 'none';
        window.location.href = '/en-us/account/';
      } else {
        error.textContent = "Username cannot be the same as the owner's. Please choose a different username";
        error.style.color = 'red';
        passwordInputOnly.style.display = "block";
      }
    } else if (usernameInput.length >= 3) {
      localStorage.setItem('accountSaved', 'true');
      localStorage.setItem('username', usernameInput);
      signIn.style.display = 'none';
      window.location.href = '/en-us/account/';
      passwordInputOnly.style.display = "none";
    } else {
      error.textContent = 'Username must be at least 3 characters long.';
      error.style.color = 'red';
    }
  }
}