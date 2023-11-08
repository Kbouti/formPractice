const practiceForm = document.getElementById(`practiceForm`);
const emailInput = document.getElementById(`emailInput`);
const emailError = document.getElementById(`emailError`);
const zipInput = document.getElementById(`zipInput`);
const passwordInput = document.getElementById(`passwordInput`);
const confirmPasswordInput = document.getElementById(`confirmPasswordInput`);

function checkEmailInput() {
  if (emailInput.validity.typeMismatch) {
    console.log(`non-email detected in email input`);
    emailInput.classList.add(`invalid`);
    emailError.textContent = `^^That's not a real email!`;
    emailError.classList.add(`active`);
    return false;
  } else if (emailInput.value == ``) {
    emailError.textContent = `Email is required`;
    emailError.classList.add(`active`);
    emailInput.classList.add(`invalid`);
    return false;
  } else {
    emailError.textContent = ``;
    emailError.classList.remove(`active`);
    emailInput.classList.remove(`invalid`);
    return true;
  }
}

function checkZipInput() {
  console.log(zipInput.value);
  if (zipInput.value == ``) {
    console.log(`empty string detected`);
    zipError.textContent = `Requires a 5 digit number`;
    zipError.classList.add(`active`);
    zipInput.classList.add(`invalid`);
    return false;
  } else if (zipInput.value.length < 5) {
    zipError.textContent = `Too short`;
    zipError.classList.add(`active`);
    zipInput.classList.add(`invalid`);
    return false;
  } else if (zipInput.value.length > 5) {
    zipError.textContent = `Too long`;
    zipError.classList.add(`active`);
    zipInput.classList.add(`invalid`);
    return false;
  } else {
    zipError.textContent = ``;
    zipError.classList.remove(`active`);
    zipInput.classList.remove(`invalid`);
    return true;
  }
}

function checkForm() {
  if (!checkEmailInput()) {
    console.log(`dun fucked up now, yah hear`);
    alert(`Please give us your email`);
  } else {
    if (!checkZipInput()){
        alert(`Check your zip code and try again`);
    } 
    else {
    alert(`thanks for filling out my form!`);
  }
}
}

practiceForm.reset();

emailInput.addEventListener(`input`, function () {
  checkEmailInput();
});

zipInput.addEventListener(`input`, function () {
  checkZipInput();
});

practiceForm.addEventListener(`submit`, function (event) {
  event.preventDefault();
  checkForm();
});
