// Write password to the #password input
function writePassword() {
  var characterAmountEL = prompt("How long do you want your password? (8-128 characters)")
  if (characterAmountEL >128 || characterAmountEL <8){
    alert("Please choose between 8 and 128 characters")
    return
  } else {
    var includeLowercaseEL = confirm("Click 'ok' to include lowercase letters")
    var includeUppercaseEL = confirm("Click 'ok' to include uppercase letters")
    var includeNumbersEL = confirm("Click 'ok' to include numbers")
    var includeSymbolsEL = confirm("Click 'ok' to include symbols")
  }
  if (includeLowercaseEL != true && includeNumbersEL != true && includeSymbolsEL != true && includeUppercaseEL != true){
    alert("You must select at least one type of character to continue")
    writePassword()
  } else {
    generatePassword(characterAmountEL)
  }
    return generatePassword(characterAmountEL)
  };
 // function to generate a password based on user input and character sets 
 function generatePassword(characterAmountEL) {
  var charCodes = []
  if (includeLowercaseEL) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeUppercaseEL) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbersEL) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbolsEL) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES) 
  var passwordCharacters = []
  for (var i = 0; i < characterAmountEL; i++) {
      var characterCode = charCodes[Math.floor(Math.random() * characterAmountEL.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
  }
console.log(passwordCharacters)
  return passwordCharacters.join('') 
}
// a loop to finds character sets for each type
function arrayFormLowToHigh(low, high) {
  var array = []
  for (var i = low; i <= high; i++) {
  array.push(i)
  }
  return array
}``