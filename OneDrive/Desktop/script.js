console.log("test")


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
