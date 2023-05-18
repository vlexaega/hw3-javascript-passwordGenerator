// Assignment code here




// DEPENDENCIES
    // user selecting box

// DATA (globalvariables)
    // password?
    // alphabet
    // numbers
    // symbols 

// FUNCTIONS
    // generatePassword 
    // return 8 letters of alphabet
    // return 2 numbers 
    // return 1 symbol

// USER INTERACTIONS
    // user clicks generate password 

// INITIALIZATION
    // function to generatePassword


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
