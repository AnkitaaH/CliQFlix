const formContainer = document.querySelector('.form-container');
const loginForm = document.querySelector('#sign-in-form');
const registerFrom = document.querySelector('#sign-up-form');

const switchForm = (form) => {
    if(form == 'register'){
        if(window.innerWidth > 800){
            formContainer.style.left = `50%`;
        }
        loginForm.style.marginLeft = `-150%`;
        registerFrom.style.marginLeft = `-100%`;
    } else{
        if(window.innerWidth > 800){
            formContainer.style.left = `0%`;
        }
        loginForm.style.marginLeft = `0%`;
        registerFrom.style.marginLeft = `50%`;
    }
}
// Create a dictionary object to store password and username pairs
const passwordDictionary = {};

// Function to handle sign-in form submission
function handleSignIn() {
  const usernameInput = document.querySelector('#sign-in-form input[type="text"]');
  const passwordInput = document.querySelector('#sign-in-form input[type="password"]');

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (passwordDictionary[password] === username) {
    alert('Successful sign-in!');
    window.location.href = 'profile.html'; // Redirect to the welcome page
  } else {
    alert('Invalid username or password.');
  }

  // Clear the form fields
  usernameInput.value = '';
  passwordInput.value = '';
}

// Function to handle sign-up form submission
function handleSignUp() {
  const usernameInput = document.querySelector('#sign-up-form input[type="text"]');
  const passwordInput = document.querySelector('#sign-up-form input[type="password"]');

  const username = usernameInput.value;
  const password = passwordInput.value;

  passwordDictionary[password] = username;

  console.log('Dictionary:', passwordDictionary);

  // Clear the form fields
  usernameInput.value = '';
  passwordInput.value = '';
}

// Add event listeners to form submission buttons
const signInButton = document.querySelector('#sign-in-form button');
const signUpButton = document.querySelector('#sign-up-form button');

signInButton.addEventListener('click', handleSignIn);
signUpButton.addEventListener('click', handleSignUp);
