// Testing push
function writePassword() {
  var characterAmountEL = prompt("How long do you want your password? (8-128 characters)")
  if (characterAmountEL >128 || characterAmountEL <8){
    alert("Please choose between 8 and 128 characters")
    return }
    else {
      var includeLowerCaseEL = confirm("Click 'ok' to include lowercase letters")
      var includeUpperCaseEL = confirm("Click 'ok' to include uppercase letters")
      var includeNumbersEL = confirm("Click 'ok' to include numbers")
      var includeSymbolsEL = confirm("Click 'ok' to include symbols")
    }
    if (includeLowerCaseEL != true && includeUpperCaseEL != true && includeNumbersEL != true && includeSymbolsEL != true ) {
         alert("You must select at least one type of character to continue.") 
    } else {
        generatePassword(characterAmountEL)
    }
    return generatePassword(characterAmountEL)
    }

    //function to generate pw from user input
    function generatePassword (characterAmountEL) {
        var charCodes = []
        if (includeLowerCaseEL) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
        if (includeUpperCaseEL) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeNumbersEL) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        if (includeSymbolsEL) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
      //error
        var passwordCharacters = []
    }

    for (var i=0; i < characterAmountEL; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * characterAmountEL.length)]
       passwordCharacters.push(String.fromCharCode(characterCode))
      }
      console.log(passwordCharacters)
          return passwordCharacters.join('')

   enerateBtn.addEventListener("click", writePassword);

  function arrayFormLowToHigh(low, high) {
      var array = []
       for (var i = low; i <= high; i++) {
      array.push(i)
      }
      return array
      };
/*console.log("test");
function generate() {
}


var selectUpperCase
var selectLowerCase;
var selectNumber;
var selectSpecialCharacter;

UpperCase ["A","B","C"];
LowerCase ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
selectNumber [1,2,3,4,5,6,7,8,9,0];
SpecialCharacter [!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~" ];

var generateBtn = document.querySelector("#generate");
let result = document.querySelector

function writePassword() {
    console.log("password function working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

var confirmLength;

/*while(confirmLength <=7 || confirmLength >= 129)
    alert("password length must be between 8-29 characters") 
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 };
 function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
};
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
};

function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
};

function generatePassword() {
    var password =""
var length = parseInt(prompt("What length would you like for the password?"));

var wantUpperCase = prompt("Do you want uppercase letters?");
/* if wantUpperCase{ *
};

var useLowers = prompt("Do you want to use lowercase letters?");

if (useLowers) {
 password += getRandomLowerCase();
};

var useNumbers = prompt("Do you want to use numbers?");

if (useNumbers) {
 password += getRandomNumbers();
};

var useSymbols = prompt("Do you want to use symbols?");

if (useNumbers) {
 password += getRandomSymbols();
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");
/*create variables to store password option arrays 
var selectUpperCase
var selectLowerCase;
var selectNumber;
var selectSpecialCharacter; */

/*UpperCase ["A","B","C"];
Lower*Case ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
selectNumber [1,2,3,4,5,6,7,8,9,0];
// SpecialCharacter ["!", "#", "$", "%", "&",]; */

/*function writePassword() {
    console.log("password function working")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}; */

