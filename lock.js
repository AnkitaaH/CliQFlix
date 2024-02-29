import users from './profiles.js';
function unlockProfile() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    
    // Replace "YOUR_PASSWORD" with your desired password
    var correctPassword = "1234";

    if (password === correctPassword) {
      // Replace this line with the action you want to perform after unlocking the profile
      alert("Profile unlocked!");
      window.location.href = 'index.html'; // Redirect to the welcome page
    } else {
      alert("Incorrect password. Please try again.");
    }
    // Reset the input field
    passwordInput.value = "";
  }



