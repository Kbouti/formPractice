const practiceForm = document.getElementById(`practiceForm`);
const emailInput = document.getElementById(`emailInput`);
const emailError = document.getElementById(`emailError`);
const zipInput = document.getElementById(`zipInput`);
const passwordInput = document.getElementById(`passwordInput`);
const passwordError = document.getElementById(`passwordError`);
const confirmPasswordInput = document.getElementById(`confirmPasswordInput`);
const confirmPasswordError = document.getElementById(`confirmPasswordError`);

function checkEmailInput() {
  if (emailInput.validity.typeMismatch) {
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
  if (zipInput.value == ``) {
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

function checkPasswordLength() {
  let checkPassed = false;
  if (passwordInput.value.length < 8) {
    passwordInput.classList.add(`invalid`);
    passwordError.classList.add(`active`);
    passwordError.textContent = `Password must be at least 8 characters`;
  } else {
    passwordInput.classList.remove(`invalid`);
    passwordError.classList.remove(`active`);
    passwordError.textContent = ``;
    checkPassed = true;
  }
  return checkPassed;
}

function gatherResults() {
  let results = "";
  if (checkEmailInput()) {
    results += `t`;
  } else {
    results += `f`;
  }
  if (checkZipInput()) {
    results += `t`;
  } else {
    results += `f`;
  }
  return results;
}

function checkForm(results) {
  switch (results) {
    case `ff`:
      alert(`Check your email and zip code`);
      return false;
    case `tf`:
      alert(`Check your zip code plz`);
      return false;
    case `ft`: {
      alert(`Give us your goddamn email`);
      return false;
    }
    case `tt`: {
      alert(`Thanks for your info!`);
      return true;
    }
    default:
      console.log(`default`);
  }

  // Switch statement won't work with an array, but we can accomplish the same thing with a string. Try that next
  // Or if I really want to use an array, we need to make an array for each of the possible cases, and compare the result to a variable (Not an array)
}

practiceForm.reset();

emailInput.addEventListener(`input`, function () {
  checkEmailInput();
});

zipInput.addEventListener(`input`, function () {
  checkZipInput();
});

passwordInput.addEventListener(`input`, function(){
  checkPasswordLength();
})

practiceForm.addEventListener(`submit`, function (event) {
  event.preventDefault();
  let results = gatherResults();
  if (checkForm(results)) {
    practiceForm.reset();
  }
});
