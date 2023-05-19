var generateBtn = document.querySelector("#generate");
 
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//CHARACTER STRINGS
    var specialCharacters= "!@#$%^&*(){}[]=<>/,.";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numberString = "0123456789";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUV"
//STRING CONVERSIONS TO ARRAYS
    var specialCharactersArray = specialCharacters.split('');
    var lowerCaseArray = lowerCase.split('');
    var numberStringArray = numberString.split('');
    var upperCaseArray = upperCase.split('');
//PROMPT USER FOR INPUT
    var passwordLength = prompt("I see you need a password.  How long would you like it to be? NOTE: Needs to be at least 8 characters but no more than 128 characters.")
//STOP USER IF LENGTH INVALID
    if (passwordLength < 8 || passwordLength >128){
        passwordLength = alert("Password must be at least 8 characters and no more than 128 characters.")
        return ("Try Again");
    }
//RECORD VARIABLES IN THE CODE
    var includeLowercase = confirm("Do you want lowercase letters? OK = yes (btw)");
    var includeUppercase = confirm("How about uppercase letters?  OK = yes (btw)");
    var includeNumeric = confirm("Any numbers? OK = yes (btw)");
    var includeSpecial = confirm("Wanna make it special with special characters? OK = yes (btw)");
    console.log(includeSpecial)
//CREATE ARRAYS FOR USERSELECTION AND GENERATEDPASSWORD
    var userSelection = [];
    var generatedPassword = []; 
//PUSHES USER SELECTIONS INTO ARRAYS
    if (includeLowercase)  {
        userSelection.push(...lowerCaseArray);
    }
    //uppercase
    if (includeUppercase) {
        userSelection.push(...upperCaseArray);
    }
    //numbers
    if (includeNumeric) {
        userSelection.push(...numberStringArray);
    }
    //specialchars
    if (includeSpecial) {
        userSelection.push(...specialCharactersArray);
    }
    for (var i = 0; i < passwordLength; i++) {
        generatedPassword.push(userSelection[Math.floor(Math.random() * userSelection.length)])
    }
    return(generatedPassword.join(''));
}
