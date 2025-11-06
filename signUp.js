var form=document.querySelector(".Form");
form.addEventListener("submit",function(event)
{
event.preventDefault();

document.querySelectorAll(".error").forEach(e => e.textContent = "");

  var firstname = document.getElementById("First Name").value.trim();
  var lastname = document.getElementById("Last Name").value.trim();
  var email = document.getElementById("Email").value.trim();
  var password = document.getElementById("password").value;
  var coPassword = document.getElementById("re-password").value;
  var isValid = true;

  if (!firstname)
  {
    document.getElementById("firstError").textContent = "First name is required.";
    isValid = false;
  }

 if( !lastname)
  {
    document.getElementById("lastError").textContent= "Last name is required.";
    isValid = false;
  }
  if(!password)
  {
  document.getElementById("passError").textContent ="Password is required.";
  isValid = false;
  }

  if(!coPassword) {
    document.getElementById("repassError").textContent ="Please confirm your password..";
    isValid = false;
  }
    else if (password !== coPassword) {
    document.getElementById("repassError").textContent = "Passwords do not match.";
    isValid = false;
  
} 
  if (!email) {
    document.getElementById("emailError").textContent = "Please enter your email address.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

   if (isValid) {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var exists = users.some(u => u.email === email);
    if (exists) {
      document.getElementById("emailError").textContent = "Email already registered.";
      return;
    }
     users.push({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    });

    localStorage.setItem("users", JSON.stringify(users));
    form.reset();
    window.location.href = "Login.html"; 
  
  } 
});