const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  if (email.value === '' || password.value === '') {
    alert('Please fill in all fields!');
    return;
  }

  if (!email.value.includes('@')) {
    alert('Please enter a valid email address!');
    return;
  }

  alert('Login successful!');
});
