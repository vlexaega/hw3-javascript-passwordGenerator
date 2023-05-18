// Assignment code here

function generatePassword() 
 // USER PROMPTS FOR INPUT

// ASK USER FOR PASSWORD LENGTH, MUST BE 8 CHARACTERS, NO MORE THAN 128 
prompt("password long 8-128")
// USER PUTS IN LESS THAN 8 CHARACTERS OR MORE THAN 128
var userChoice = prompt("Please ensure 8-128 characters");
if (!characterSelector.includes(password))
// RETURN TO INITIAL SCREEN

function getUserChoice(){
    var passwordLength = prompt("How long would you like your password? Note: Must be at least 8 characters but no more than 128 characters.");
    var passwordShort = prompt("Your password must include at least 8 characters but no more than 128 characters.");
    if (!passwordLength < 8 || passwordLength > 128);
    return passwordShort;
    }
function getUserChoice()
    
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?");
// USER CONFIRMATION IS LENGTH NOT SATISFIED.
    // if (passwordLength < 8 || passwordLength > 128) {
    //   passwordLength = prompt("Password length invalid. Please enter number between 8 and 128.");
    // }
 
//GENERATE PASSWORD VARS
    var generatedPass = [];
    var eligiblevalues = [];
//CHARACTER STRINGS
    var specialCharsString = "!@#$%^&*(){}[]=<>/,.";
    var lowercaseCharsString = "abcdefghijklmnopqrstuvwxyz";
    var numbersString = "0123456789";
    var uppercaseCharsString = "ABCDEFGHIJKLMNOPQRSTUV"
  
//STRING CONVERSIONS TO ARRAYS
    var specialCharArray = specialCharsString.split('');
    var lowercaseArray = lowercaseCharsString.split('');
    var numbersArray = numbersString.split('');
    var uppercaseArray = uppercaseCharsString.split('');
    
    //lowercase
    if (includeLowercase)  {
      eligiblevalues.push(...lowercaseArray);
    }
  
    //uppercase
    if (includeUppercase) {
      eligiblevalues.push(...uppercaseArray);
    }
  
    //numbers
    if (includeNumeric) {
      eligiblevalues.push(...numbersArray);
    }
  
    //specialchars
    if (includeSpecial) {
      eligiblevalues.push(...specialCharArray);
    }
  

  //CREATE PASSWORD
  
    for(var i = 0; i < passwordLength; i++) {
      //use a random number to select from arrays/strings up to the length
      generatedPass.push((eligiblevalues[Math.floor(Math.random() * eligiblevalues.length)]));
    }
  
    //RETURN THE PASSWORD
    return(generatedPass.join(''));
  
  
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