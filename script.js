const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('singInButton');
const signInForm = document.getElementById('singIn');
const signUpForm = document.getElementById('signUp');

signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    singUpForm.style.display = "block";
})
signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
})