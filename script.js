// Get the form element and error message element
const form = document.getElementById('subscription-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');

// Function to validate the email address using a regular expression
const isEmailValid = (email) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
};

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevent form submission

  const email = emailInput.value.trim();

  // Check if the email address is valid
  if (isEmailValid(email)) {
    // Clear error state and submit the form
    emailInput.classList.remove('error');
    errorMessage.classList.add('hidden');
    form.submit();
  } else {
    // Show error message and mark input as error
    emailInput.classList.add('error');
    errorMessage.classList.remove('hidden');
  }
};

// Add form submission event listener
form.addEventListener('submit', handleFormSubmit);

// Replace the configuration object with your own Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl8sVLJLkfRnby7FGP5Nb_XcrlAscjqrY",
  authDomain: "industry-news-7ed35.firebaseapp.com",
  projectId: "industry-news-7ed35",
  storageBucket: "industry-news-7ed35.appspot.com",
  messagingSenderId: "697574444220",
  appId: "1:697574444220:web:57700a93a8b7d3b30914b9",
  measurementId: "G-B15DWPH0W6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to handle user sign-up
const handleSignUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
    })
    .catch((error) => {
      // Handle sign-up errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-up error:", errorCode, errorMessage);
    });
};

// Function to handle user sign-in
const handleSignIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {


      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in error:", errorCode, errorMessage);
    });
};

// Function to handle user sign-out
const handleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // User signed out successfully
      console.log("User signed out");
    })
    .catch((error) => {
      // Handle sign-out errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-out error:", errorCode, errorMessage);
    });
};

// Add event listeners to sign-up, sign-in, and sign-out buttons
document.getElementById("signup-btn").addEventListener("click", handleSignUp);
document.getElementById("signin-btn").addEventListener("click", handleSignIn);
document.getElementById("signout-btn").addEventListener("click", handleSignOut);