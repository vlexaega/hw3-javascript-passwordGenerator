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
    var specialCharsString = "!@#$%^&*(){}[]=<>/,.";
    var lowercaseCharsString = "abcdefghijklmnopqrstuvwxyz";
    var numbersString = "0123456789";
    var uppercaseCharsString = "ABCDEFGHIJKLMNOPQRSTUV"
//STRING CONVERSIONS TO ARRAYS
    var specialCharArray = specialCharsString.split('');
    var lowercaseArray = lowercaseCharsString.split('');
    var numbersArray = numbersString.split('');
    var uppercaseArray = uppercaseCharsString.split('');
//PROMPT USER FOR INPUT
    var passwordLength = prompt("How long would you like your password? Note: Must be at least 8 characters but no more than 128 characters.")
//STOP USER IF LENGTH INVALID
    if (passwordLength < 8 || passwordLength >128){
        passwordLength = alert("Password must be at least 8 characters and no more than 128 characters.")
        return generatePassword();
    }
//RECORD VARIABLES IN THE CODE
    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumeric = confirm("Include numbers?");
    var includeSpecial = confirm("Include special characters?");
    var eligiblevalues = [];
    var generatedPass = []; 
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
    for (var i = 0; i < passwordLength; i++) {
        generatedPass.push(eligiblevalues[Math.floor(Math.random() * eligiblevalues.length)])
    }
    return(generatedPass.join(''));
}
