var form = document.getElementById('loginForm');
var email = document.getElementById('email');
var password = document.getElementById('password');
var errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 
  errorMessage.textContent = ""; 

  if (email.value === '' || password.value === '') {
   errorMessage.textContent="Please fill in all fields!"
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var foundUser = users.find(u => u.email === email.value && u.password === password.value);

  if (!foundUser) {
    errorMessage.textContent="Invalid email or password!"
    return;
  }

  localStorage.setItem("activeUser", JSON.stringify(foundUser));

  
  window.location.href = "Page.html"; 

});
