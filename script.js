// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many characters would you like your password to contain? \n \n * Pick a number from 8 to 128 *");

  // Alert error when password length doesn't meet length requirements
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Error: \nPassword length must be at least 8 characters, no more than 128. \nPlease try again!");
    return;
  };

  // Let user confirm which character types are included in the password
  var includeSpecial = confirm("Click 'OK' to confirm including special characters.");
  var includeNumeric = confirm("Click 'OK' to confirm including numeric characters.");
  var includeLowercase = confirm("Click 'OK' to confirm including Lowercase characters.");
  var includeUppercase = confirm("Click 'OK' to confirm including uppercase characters.");

  // Return user's selection to an object
  return {
    length: parseInt(passwordLength),
    special: includeSpecial,
    numeric: includeNumeric,
    lowercase: includeLowercase,
    uppercase: includeUppercase
  };
}

//Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Function to generate password with user input
function generatePassword() {

  //Load user choice generated from getPasswordOptions function 
  var userChoices = getPasswordOptions();

  //Alert error when user doesn't select any character type
  if (!userChoices.special && !userChoices.numeric && !userChoices.lowercase && !userChoices.uppercase) {
    alert("Error: \nYou need to select at least one character type. \nPlease try again!");
    return null;
  }

  //Creates the includeType character array to contain the user-selected character type
  var includeType = [];

  //Store user-selected character type into includeType character array
  var generatedCharacters = [];

  //When each containing character type condition is true, join the character type to a new character array and push its random characters into the generatedCharacters array.
  if (userChoices.special) {
    includeType = includeType.concat(specialCharacters);
    generatedCharacters.push(getRandom(specialCharacters));
  }
  if (userChoices.numeric) {
    includeType = includeType.concat(numericCharacters);
    generatedCharacters.push(getRandom(numericCharacters));
  }
  if (userChoices.lowercase) {
    includeType = includeType.concat(lowerCasedCharacters);
    generatedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (userChoices.uppercase) {
    includeType = includeType.concat(upperCasedCharacters);
    generatedCharacters.push(getRandom(upperCasedCharacters));
  }

  //Loop the remaining password length into the generatedCharacters array.
  for (var i = generatedCharacters.length; i < userChoices.length; i++) {
    generatedCharacters.push(getRandom(includeType));
  }

  //Sort generated characters in Random Order
  generatedCharacters = generatedCharacters.sort(function () { return Math.random() - 0.5; });

  //Join all generated characters into a new string 
  return generatedCharacters.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);