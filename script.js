var generateBtn = document.querySelector("#generate");





var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericChar = "0123456789";

var specialChar = "!@#$%^&*:";

var passwordText = document.querySelector("#password");









// Write password to the #password input





function generatePassword() {

  var password = ""

  var passwordChar = "";





  var pwdlength = prompt("Please enter a valid password length");

  pwdlength = parseInt(pwdlength)





  if (pwdlength < 8) {

    alert("Password should be at least 8 characters long");

    return "";

  }

  if (pwdlength > 128) {

    alert("Password should be no more than 128 characters long");

    return "";

  }





  var lowercaseCharactersChoice = confirm("do you wanna add lowercase characters?");

  console.log("working")

  if (lowercaseCharactersChoice) {

    passwordChar += lowercaseChar;

  }

  var uppercaseCharactersChoice = confirm("do you wanna add upper case letters?")

  if (uppercaseCharactersChoice) {

    passwordChar += uppercase;

  }

  var numericCharactersChoice = confirm("do you wanna add numbers?");

  if (numericCharactersChoice) {

    passwordChar += numericChar;

  }



  var specialCharacterChoice = confirm("do you wanna add special characters?");

  if (specialCharacterChoice) {

    passwordChar += specialChar;

  }

  console.log(passwordChar)





  for (var i = 0; i < pwdlength; i++) {

    var randomPassword = Math.floor(Math.random() * passwordChar.length)

    password += passwordChar.substring(randomPassword, randomPassword + 1);

  }

  console.log(password)

  passwordText.textContent = password;

  function writePassword() {

    console.log("debuggin")

    var password = generatePassword();

    console.log("testing")

  }
}

// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);

    //  input should be validated and at least one character type should be selected


