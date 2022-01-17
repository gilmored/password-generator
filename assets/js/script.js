// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];

  function passwordLength() {
    var length = 0;
  }
  
  while (length > 128 || length < 8 || isNaN(length) === true) {
    length = parseInt(window.prompt("How many characters would you like your password to be?"));

    //Password must be with 8 to 128 characters 
    if (length < 8) {
      window.alert("Your password length must be at least 8 characters.");
    } else if (length > 128) {
      window.alert("Your password length must be no more than 128 characters.");
    } else if (isNaN(length) === true){
      window.alert("Must provide a numeric value.");
    }
  }    


  // user selects if they want lowercase letters
  var lowerChar = window.confirm("Do you want to use lowercase characters?");
  if (lowerChar) {
    password += lowerCase;
  };
  
  // user selects if they want uppercase letters
  var upperChar = window.confirm("Do you want to use UPPERCASE characters?");
  if (upperChar) {
    password += upperCase;
  };

  // user selects if they want numbers
  var numbersChar = window.confirm("Do you want to use numbers?");
  if (numbersChar) {
    password += numbers;
  };

  // user selects if they want special characters
  var specialChar = window.confirm("Do you want to use special characters?");
  if (specialChar) {
    password += specialChar;
  };




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
