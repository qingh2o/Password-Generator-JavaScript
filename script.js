// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("How many characters would you like your password to contain? \n \n * Pick a number from 8 to 128 *");

  // Alert when password length doesn't meet length requirements
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Error: \nPassword length must be at least 8 characters, no more than 128. \nPlease try again!");
    return;
  };

  // Let user confirm which character types are included in the password
  var includeSpecial = confirm("Click OK to confirm including special characters.");
  var includeNumeric = confirm("Click OK to confirm including numeric characters.");
  var includeLowercase = confirm("Click OK to confirm including Lowercase characters.");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters."); 

 // Return user's selection to an object
  return {
    length: parseInt(passwordLength),
    special: includeSpecial,
    numeric: includeNumeric,
    lowercase: includeLowercase,
    uppercase: includeUppercase
  };
  // return {
  //   lengthOfPassword: parseInt(passwordLength),
  //   choices: [includeSpecial,
  //     includeNumeric,
  //     includeLowercase,
  //     includeUppercase
  //   ]
  // };
}

// //---------------test 
// console.log(getPasswordOptions());


//Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()* arr.length)];
}
// //---------------test 
// console.log(getRandom(upperCasedCharacters));


// Function to generate password with user input
function generatePassword() {
  var userChoices = getPasswordOptions();
  
    if (!userChoices.special && !userChoices.numeric && !userChoices.lowercase && !userChoices.uppercase) {
      alert("Error: \nYou need to select at least one character type. \nPlease try again!");
      return null;
    }

  
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