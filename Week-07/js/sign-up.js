var firstName = document.querySelector(".input-name");
var lastName = document.querySelector(".input-lastName");
var id = document.querySelector(".input-id");
var date = document.querySelector(".input-date");
var phone = document.querySelector(".input-phone");
var address = document.querySelector(".input-address");
var city = document.querySelector(".input-city");
var code = document.querySelector(".input-code");
var email = document.querySelector(".input-email");
var password = document.querySelector(".input-password");
var confirmPassword = document.querySelector(".input-confirm");
var registerButton = document.querySelector(".member-button");
var titleModal = document.getElementById("title-modal");
var textModal = document.getElementById("text-modal");
var modalWindow = document.getElementById("modal-window");
var buttonModal = document.getElementById("button-modal");

window.onload=function(){
  firstName.value = localStorage.getItem('firstName');
  lastName.value = localStorage.getItem('lastName');
  id.value = localStorage.getItem('id');
  date.value = localStorage.getItem('date');
  phone.value = localStorage.getItem('phone');
  address.value = localStorage.getItem('address');
  city.value = localStorage.getItem('city');
  code.value = localStorage.getItem('code');
  email.value = localStorage.getItem('email');
  password.value = localStorage.getItem('password');
  confirmPassword.value = localStorage.getItem('confirmPassword');
}

function isLetter(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    var codigoAscii = cadena.charCodeAt(i);
    if ((codigoAscii < 65 || codigoAscii > 90) && (codigoAscii < 97 || codigoAscii > 122)) {
      return false;
    }
  }
  return true;
}

function isNumber(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    var codigoAscii = cadena.charCodeAt(i);
    if (codigoAscii < 48 || codigoAscii > 57) {
      return false;
    }
  }
  return true;
}

function letterAndNumber(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    var codigoAscii = cadena.charCodeAt(i);
    if ((codigoAscii < 48 || codigoAscii > 57) && (codigoAscii < 65 || codigoAscii > 90) && (codigoAscii < 97 || codigoAscii > 122)) {
      return false;
    }
  }
  return true;
}

function dateCheck(inputDate) {
  var dateToday = new Date();
  var dateSelected = new Date(inputDate.value);
  return dateSelected < dateToday;
}

function hasCaps(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i].toUpperCase() && cadena[i] !== cadena[i].toLowerCase()) {
      return true;
    }
  }
  return false;
}
var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var flag=0;

firstName.addEventListener("blur", function() {
    if (firstName.value.length =="") {
      firstName.nextElementSibling.textContent = "Field Required";
      firstName.classList.add('border-red');
    } else if(!isLetter(firstName.value)) {
      firstName.nextElementSibling.textContent = "Firstname field must only contain letters";
      firstName.classList.add('border-red');
    } else if (firstName.value.length<4) {
      firstName.nextElementSibling.textContent = "Firstname must be more than 3 characters";
      firstName.classList.add('border-red');
    }else {
      firstName.nextElementSibling.textContent = "";
      firstName.classList.remove('border-red');
    }
});

lastName.addEventListener("blur", function() {
  if (lastName.value.length =="") {
    lastName.nextElementSibling.textContent = "Field Required";
    lastName.classList.add('border-red');
  } else if(!isLetter(lastName.value)) {
    lastName.nextElementSibling.textContent = "Lastname must only contain letters";
    lastName.classList.add('border-red');
  } else if (lastName.value.length<4) {
    lastName.nextElementSibling.textContent = "Lastname must be more than 3 characters";
    lastName.classList.add('border-red');
  }else {
    lastName.nextElementSibling.textContent = "";
    lastName.classList.remove('border-red');
  }
});

id.addEventListener("blur", function() {
  if (id.value.length =="") {
    id.nextElementSibling.textContent = "Field Required";
    id.classList.add('border-red');
  } else if(!isNumber(id.value)) {
    id.nextElementSibling.textContent = "DNI field must only contain numbers";
    id.classList.add('border-red');
  } else if (id.value.length<=7) {
    id.nextElementSibling.textContent = "DNI must be more than 7 characters";
    id.classList.add('border-red');
  }else {
    id.nextElementSibling.textContent = "";
    id.classList.remove('border-red')
  }
});

phone.addEventListener("blur", function() {
  if (phone.value.length =="") {
    phone.nextElementSibling.textContent = "Field Required";
    phone.classList.add('border-red');
  } else if(!isNumber(phone.value)) {
    phone.nextElementSibling.textContent = "Phone field must only contain numbers";
    phone.classList.add('border-red')
  } else if (phone.value.length!==10) {
    phone.nextElementSibling.textContent = "Phone must have 10 characters";
    phone.classList.add('border-red');
  }else {
    phone.nextElementSibling.textContent = "";
    phone.classList.remove('border-red')
  }
});

email.addEventListener("blur", function() {
  if(email.value.length =="") {
    email.nextElementSibling.textContent = "Field Required";
    email.classList.add('border-red');
  } else if (!emailRegex.test(email.value)) {
    email.nextElementSibling.textContent = "Email format incorrect.";
    email.classList.add('border-red');
  } else {
    email.nextElementSibling.textContent = "";
    email.classList.remove('border-red');
  }
});

city.addEventListener("blur", function() {
  if (city.value.length =="") {
    city.nextElementSibling.textContent = "Field Required";
    city.classList.add('border-red');
  } else if(!letterAndNumber(city.value)) {
    city.nextElementSibling.textContent = "City field must only contain numbers and letters";
    city.classList.add('border-red');
  } else if (city.value.length<=3) {
    city.nextElementSibling.textContent = "City must be more than 3 characters";
    city.classList.add('border-red');
  }else {
    city.nextElementSibling.textContent = "";
    city.classList.remove('border-red');
  }
});

code.addEventListener("blur", function() {
  if (code.value.length =="") {
    code.nextElementSibling.textContent = "Field Required";
    code.classList.add('border-red');
    var codeError="Field Required";
  } else if(!isNumber(code.value)) {
    code.nextElementSibling.textContent = "Zip code must only contain numbers";
    code.classList.add('border-red');
  } else if (code.value.length<4 || code.value.length>5) {
    code.nextElementSibling.textContent = "Zip code must have 4 or 5 characters";
    code.classList.add('border-red');
  }else {
    code.nextElementSibling.textContent = "";
    code.classList.remove('border-red');
  }
});

password.addEventListener("blur", function() {
  if (password.value.length =="") {
    password.nextElementSibling.textContent = "Field Required";
    password.classList.add('border-red');
  } else if(!letterAndNumber(password.value)) {
    password.nextElementSibling.textContent = "Password must only contain numbers and letters";
    password.classList.add('border-red');
  } else if (!hasCaps(password.value)) {
    password.nextElementSibling.textContent = "Password must contain at least one Uppercase Letter";
    password.classList.add('border-red');
  }else if(password.value.length<=7) {
    password.nextElementSibling.textContent = "Password must contain at least 8 characters";
    password.classList.add('border-red');
  }else {
    password.nextElementSibling.textContent = "";
    password.classList.remove('border-red');
  }
});

confirmPassword.addEventListener("blur", function() {
  if (confirmPassword.value.length =="") {
    confirmPassword.nextElementSibling.textContent = "Field Required";
    confirmPassword.classList.add('border-red');
  }else if(confirmPassword.value !== password.value) {
    confirmPassword.nextElementSibling.textContent = "Passwords does not match";
    confirmPassword.classList.add('border-red');
  }else {
    confirmPassword.nextElementSibling.textContent = "";
    confirmPassword.classList.remove('border-red');
  }
});

firstName.addEventListener("focus", function() {
  firstName.nextElementSibling.textContent = "";
  firstName.classList.remove('border-red');
});

lastName.addEventListener("focus", function() {
  lastName.nextElementSibling.textContent = "";
  lastName.classList.remove('border-red');
});

id.addEventListener("focus", function() {
  id.nextElementSibling.textContent = "";
  id.classList.remove('border-red');
});

date.addEventListener("focus", function() {
  date.nextElementSibling.textContent = "";
  date.classList.remove('border-red');
});

phone.addEventListener("focus", function() {
  phone.nextElementSibling.textContent = "";
  phone.classList.remove('border-red');
});

address.addEventListener("focus", function() {
  address.nextElementSibling.textContent = "";
  address.classList.remove('border-red');
});

city.addEventListener("focus", function() {
  address.nextElementSibling.textContent = "";
  address.classList.remove('border-red');
});

code.addEventListener("focus", function() {
  code.nextElementSibling.textContent = "";
  code.classList.remove('border-red');
});

email.addEventListener("focus", function() {
  email.nextElementSibling.textContent = "";
  email.classList.remove('border-red');
});

password.addEventListener("focus", function() {
  password.nextElementSibling.textContent = "";
  password.classList.remove('border-red');
});

confirmPassword.addEventListener("focus", function() {
  confirmPassword.nextElementSibling.textContent = "";
  confirmPassword.classList.remove('border-red');
});

date.addEventListener("blur", function() {
  if(date.value.length === "") {
    date.nextElementSibling.textContent = "Field Required";
    date.classList.add('border-red');
  }  else if (!dateCheck(date)) {
    date.nextElementSibling.textContent = "Please enter a valid date.";
    date.classList.add('border-red');
  } else {
    date.nextElementSibling.textContent = "";
    date.classList.remove('border-red');
  }
});

function GetValueToShow(element) {
    if(element.nextElementSibling.textContent === "")
      return element.value;
    else
      return element.nextElementSibling.textContent;
}

function flagFunction(element) {
  if(element.nextElementSibling.textContent === "")
    return 1;
  else
    return 0;
}

address.addEventListener("blur", function() {
    if (address.value.length =="") {
      address.nextElementSibling.textContent = "Field Required";
      address.classList.add('border-red');
    } else if(!IsValidAddress(address.value)) {
      address.nextElementSibling.textContent = "Format invalid";
      address.classList.add('border-red')
    }else {
      address.nextElementSibling.textContent = "";
      address.classList.remove('border-red')
    }
});

function IsValidAddress(value) {
  value = value.trim();
  var array = value.split(" ");
  if(array.length === 1 || value.length < 5)
    return false;
  else
    return true;
}

registerButton.addEventListener("click", function(event) {
event.preventDefault();
var alertMessage = '';
var flag = 0;
alertMessage = 'Form information:\n';
if (firstName.value == ""){
  alertMessage += 'firstName: ' +  "Field Required";
} else {
  alertMessage += 'firstName: ' +  GetValueToShow(firstName);
  flag = flag + flagFunction(firstName);
}
if (lastName.value == ""){
  alertMessage += '\nLast firstName: ' + "Field Required";
} else {
  alertMessage += '\nLast firstName: ' + GetValueToShow(lastName);
  flag = flag + flagFunction(lastName);
}
if (id.value == ""){
  alertMessage += '\nLast ID Number: ' + "Field Required";
} else {
  alertMessage += '\nLast ID Number: ' + GetValueToShow(id);
  flag = flag + flagFunction(id);
}
if (date.value == ""){
  alertMessage += '\nBirthdate: ' + "Field Required";
} else {
  alertMessage += '\nBirthdate: ' + GetValueToShow(date);
  flag = flag + flagFunction(date);
}
if (phone.value == ""){
  alertMessage += '\nPhone Number: ' + "Field Required";
} else {
  alertMessage += '\nPhone Number: ' + GetValueToShow(phone);
  flag = flag + flagFunction(phone);
}
if (address.value == ""){
  alertMessage += '\nAddress: ' + "Field Required";
} else {
  alertMessage += '\nAddress: ' + GetValueToShow(address);
  flag = flag + flagFunction(address);
}
if (city.value == ""){
  alertMessage += '\nLocality: ' + "Field Required";
} else {
  alertMessage += '\nLocality: ' + GetValueToShow(city);
  flag = flag + flagFunction(city);
}
if (code.value == ""){
  alertMessage += '\nPostal Code: ' + "Field Required";
} else {
  alertMessage += '\nPostal Code: ' + GetValueToShow(code);
  flag = flag + flagFunction(code);
}
if (password.value == ""){
  alertMessage += '\nPassword: ' + "Field Required";
} else {
  alertMessage += '\nPassword: ' + GetValueToShow(password);
  flag = flag + flagFunction(password);
}
if (confirmPassword.value == ""){
  alertMessage += '\nConfirm Password: ' + "Field Required";
} else {
  alertMessage += '\nConfirm Password: ' + GetValueToShow(confirmPassword);
  flag = flag + flagFunction(confirmPassword);
}
if (email.value == ""){
  alertMessage += '\nEmail: ' + "Field Required";
} else {
  alertMessage += '\nEmail: ' + GetValueToShow(email);
  flag = flag + flagFunction(email);
}

function formatDate(date) {
  var dateArray = date.split("-");
  var finalDate = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
  return finalDate;
};

if (flag==11){
  var prueba = date.value;
  var formattedDate  = formatDate(date.value);

  var url =`https://api-rest-server.vercel.app/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${id.value}&dob=${formattedDate}&phone=${phone.value}&address=${address.value}&city=${city.value}&zip=${code.value}&email=${email.value}&password=${password.value}`;

  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function(resp) {
    if (!resp.success){
      throw new Error(JSON.stringify(resp))
    }
    modalWindow.style.display= "block";
    titleModal.innerHTML = "The request was successful";
    textModal.innerHTML = JSON.stringify(resp.msg);
    textModal.style.color = "#373867";
    alert(alertMessage);
    localStorage.setItem('firstName', firstName.value)
    localStorage.setItem('lastName', lastName.value)
    localStorage.setItem('id', id.value)
    localStorage.setItem('phone', phone.value)
    localStorage.setItem('date', prueba)
    localStorage.setItem('city', city.value)
    localStorage.setItem('code', code.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('address', address.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('confirmPassword', confirmPassword.value)
  })
  .catch(function (fail) {
    modalWindow.style.display= "block";
    titleModal.innerHTML = "The request was unsuccessful";
    textModal.innerHTML = fail;
    textModal.style.color = "red";
  });

}else{
  alert(alertMessage);
}
});

buttonModal.addEventListener("click",function(){
  modalWindow.style.display= "none";
})