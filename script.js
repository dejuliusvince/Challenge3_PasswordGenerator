
//Need to create variables  for:
// -the lowercase character set
// -the uppercase character set
// -numbers & special characters
// 

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%^&*()"

// defining the button and where to render password

var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password")


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Need functions to:
//1. return true or false based on the password minLength and maxLength 
//2. function to create a random password
//3. generates a password from the given length and character pool 
//4. check if the user wants lowercase, uppercase, and special characters





//function to generate the random password using a while statement



function generatePassword() {

  var characterPool = ""
  var finalpwd = ""

  var pwdlength = parseInt(prompt("please enter 8 to 128 characters"))


  if (pwdlength < 8 || pwdlength > 128) {
    alert("*password not within required  range*")
    return ""
  }
  var isLowercase = confirm("include lowercase letters?")
  if (isLowercase) {
    characterPool = characterPool + lowercase
  }


  var isUppercase = confirm("include uppercase letters?")
  if (isUppercase) {
    characterPool = characterPool + uppercase
  }


  var isNumber = confirm("include numbers?")
  if (isNumber) {
    characterPool = characterPool + number
  }


  var isSpecial = confirm("include special characters?")
  if (isSpecial) {
    characterPool = characterPool + special
  }

  if (!characterPool) {
    alert("You must select at least one character type for the password")
    return ""
  }

  while (finalpwd.length < pwdlength) {
    var generator = Math.floor(Math.random() * characterPool.length)
    finalpwd = finalpwd + characterPool[generator]
  }

  return finalpwd

}



// Allow the button to render the password on click
generateBtn.addEventListener("click", writePassword); 
