// Assignment Code
//Need to create variables  for:
//1.the password character set 
//2. the minimum and maxmimum length of the password
//3. a var to fetch the password html element
//4. a var to set the password as empty by default
//5. define upper and lowercase characters
//

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%^&*()"



var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password")
var chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";



// Write password to the #password input
// 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Need functions to:
//1. return true or false based on the password minLength and maxLength 
//2. a for loop to create a random password
//3. generate a password from the given length and character set
//4. check if te user wants lowercase, uppercase, and special characters





//function to generate the random password using a for loop



/* function generatePassword() {

  var finalpwd = ""

  var pwdlength = prompt("please enter 8 to 128 characters")
  console.log(pwdlength)

  if (length >= 8 && length <= 128) {
    var isLowercase = confirm("include lowercase letters?")
    console.log(isLowercase)

    var isUppercase = confirm("include uppercase letters?")
    console.log(isUppercase)

    var isNumber = confirm("include numbers?")
    console.log(isNumber)

    var isSpecial = confirm("include special characters?")
    console.log(isSpecial)

    if (isLowercase === true) {
      var positionString = Math.floor(Math.random() * 26)
      console.log(positionString)
      lowercase[positionString]
      finalpwd = finalpwd + lowercase[positionString]

    }
    else {

    }
    if (isUppercase === true) {
      var positionString = Math.floor(Math.random() * 26)
      console.log(positionString)
      finalpwd = finalpwd + uppercase[positionString]
    }
    else {

    }
    if (isNumber === true) {
      var positionString = Math.floor(Math.random() * 10)
      console.log(positionString)
      finalpwd = finalpwd + number[positionString]
    }
    else {

    }
    if (isSpecial === true) {
      var positionString = Math.floor(Math.random() * 10)
      console.log(positionString)
      finalpwd = finalpwd + special[positionString]
    }
    else {

    }


  }
  else {
    alert("*password not within required  range*")
  }

  return finalpwd


} */



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
