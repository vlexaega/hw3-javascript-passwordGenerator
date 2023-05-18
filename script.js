

// DATA (globalvariables)
    // password?
    // generate button
    // array alphabet 
    // use array or string of characters?
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var lowerCase = ['abcdefghijklmnopqrstuvwxyz']
    // array numbers
var numeriC = ['0123456789']
    // array symbols 
var specialCharacters = ['!@#$%^&*_-<+>;:']
var characterTypes = ["lowercase", "uppercase", "numeric", "specialcharacters"]
var selectionY = true
var selectionN = false

var HelloAgain
function declareHelloAgain (upperCase, lowerCase, numeriC, characterTypes){
    console.log("Hello, my parameters are "+ upperCase + lowerCase + numeriC + ", and " +characterTypes);
    console.log("--------");
    return;
}
declareHelloAgain()
// FUNCTIONS
// 1) generateBtn.addEventListener("click", generatePassword);

// 2) function generatePassword(){
//     prompt("Please select from the following critera")
//     console.log[generateBttn]
// }

// 3) generatePassword()

// USER INTERACTIONS
    // user clicks generate password 

// INITIALIZATION
    // function to generatePassword

// idea of use:
    // user selects "generate password"
    // prompt user for selection of criteria - userPrompt function
        // display list with var charactersUser array
            // list should display
            function specCharacUser () {
                console.log("Please select" + characterTypes)
                return;
            }
                // Lowercase // Y or N
                // Uppercase // Y or N
                // Numeric // Y or N
                // Special Characters // Y or N
            specCharacUser()

            

        // if all character types are selected
            //then generatePasswordgeneral()function begins
            //select from global vars the below:
                // 8 elements from lowerCase array
                // 2 elements from upperCase array
                // 1 element from specialCharacters array
                // 1 element from numeriC array
                // // let password = (mix of global vars)
        // if 1 character type is selected
            // then prompt user to select at least 2
                // reinitiate userPrompt function
        // if 2 character types are selected
            // then generatePasswordtwo begins
            //select from global vars the below: 
                // 9 elements from uppercase array
                // 1 element from specialCharacters array
                // // let password = (mix of global vars)
        // if 3 character types are selected 
            // then generatePasswordthree begins
            // select from global vars the below:
                // 8 elements from lowerCase array
                // 2 elements from upperCase array
                // 1 element from specialCharacters array
                // let password = (mix of global vars)

                
        











// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
