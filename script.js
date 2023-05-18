// Assignment code here

function generatePassword() {
 // USER PROMPTS FOR INPUT
    var passwordLength = prompt("Please input a password length (at least 8 characters but no more than 128 characters).");
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?");
// USER CONFIRMATION IS LENGTH NOT SATISFIED.
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Password length invalid. Please enter number between 8 and 128.");
    }
  
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
      var generatedPass.push((eligiblevalues[Math.floor(Math.random() * eligiblevalues.length)]));
    }
  
    //return the pretty password
    return(generatedPass.join(''));
  }
  
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