// Get references to form elements
var emailInput = document.querySelector(".input-email");
var passwordInput = document.querySelector(".input-password");
var loginButton = document.querySelector(".login-button button");
var titleModal = document.getElementById("title-modal");
var textModal = document.getElementById("text-modal");
var modalWindow = document.getElementById("modal-window");
var buttonModal = document.getElementById("button-modal");

// Validate the email field on blur event
emailInput.addEventListener("blur", function() {
  if (!validateEmail(emailInput.value)) {
    emailInput.nextElementSibling.textContent = "*Please enter a valid email address.";
    emailInput.classList.add('border-red')
  } else {
    emailInput.nextElementSibling.textContent = "";
    emailInput.classList.remove('border-red')
  }
});

// Validate the password field on blur event
passwordInput.addEventListener("blur", function() {
  if (!validatePassword(passwordInput.value)) {
    passwordInput.nextElementSibling.textContent = "*Please enter a valid password.";
    passwordInput.classList.add('border-red')
  } else {
    passwordInput.nextElementSibling.textContent = "";
    passwordInput.classList.remove('border-red')
  }
});

// Clear error message on focus event
emailInput.addEventListener("focus", clearErrorMessage);
passwordInput.addEventListener("focus", clearErrorMessage);

// Function to validate email
function validateEmail(email) {
  var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Function to validate password
function validatePassword(password) {
  var passwordLength = password.length;
  var containsUppercase = false;
  var containsLowercase = false;
  var containsNumber = false;

  for (var i = 0; i < passwordLength; i++) {
    var char = password.charAt(i);

    if (char >= 'A' && char <= 'Z') {
      containsUppercase = true;
    } else if (char >= 'a' && char <= 'z') {
      containsLowercase = true;
    } else if (char >= '0' && char <= '9') {
      containsNumber = true;
    }
  }

  return passwordLength >= 8 && containsUppercase && containsLowercase && containsNumber;
}

// Function to clear error message
function clearErrorMessage(event) {
  var target = event.target;
  target.nextElementSibling.textContent = "";
}

// Validate form on login button click
loginButton.addEventListener("click", function(event) {
  event.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;
  var alertMessage= [ ];
  if (!validateEmail(email)) {
    alertMessage += "Please enter a valid email address.\n";
  }
  if (!validatePassword(password)) {
    alertMessage += "Please enter a valid password.\n";
  }
  if (alertMessage == "") {
    var url=`https://api-rest-server.vercel.app/login?email=${email}&password=${password}`;
    fetch(url)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (resp) {
        if(!resp.success){
          throw new Error(JSON.stringify(resp))
        }
        modalWindow.style.display= "block";
        titleModal.innerHTML = "The request was successful";
        textModal.innerHTML = JSON.stringify(resp.msg);
        textModal.style.color = "#373867";
        alert("\nEmail: " + emailInput.value + "\nPassword3: " + passwordInput.value);
      })
      .catch(function (fail) {
        modalWindow.style.display= "block";
        titleModal.innerHTML = "The request was unsuccessful";
        textModal.innerHTML = fail;
        textModal.style.color = "red";
      });

  }
});

buttonModal.addEventListener("click",function(){
  modalWindow.style.display= "none";
})