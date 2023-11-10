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

function checkPasswordMatch() {
  let checkPassed = false;
  let password1 = passwordInput.value;
  let password2 = confirmPasswordInput.value;
  if (password1 === password2) {
    checkPassed = true;
    confirmPasswordInput.classList.remove(`invalid`);
    confirmPasswordError.classList.remove(`active`);
    confirmPasswordError.textContent = ``;
  } else {
    confirmPasswordInput.classList.add(`invalid`);
    confirmPasswordError.classList.add(`active`);
    confirmPasswordError.textContent = `Passwords don't match`;
    checkPassed = false;
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
  if (checkPasswordLength()) {
    results += `t`;
  } else {
    results += `f`;
  }
  if (checkPasswordMatch()) {
    results += `t`;
  } else {
    results += `f`;
  }
  return results;
}

function checkForm(results) {
  switch (results) {
    case `ffft`:
      alert(
        `Email, zip code, and password length are all invalid. Please try again. `
      );
      return false;
    case `ffff`:
      alert(
        `Email, zip code, and password are all invalid. You didn't get anything right. `
      );
      return false;
    case `tfft`:
      alert(`Check your zip code and password length plz`);
      return false;
    case `tfff`:
      alert(`Check your zip code and password plz`);
      return false;
    case `tftf`:
      alert(`Check your zip code and password plz`);
      return false;
    case `ftft`:
      alert(`Please check your email and password`);
      return false;
    case `ftff`:
      alert(`Please check your email and password`);
      return false;
    case `fftt`:
      alert(`Check your email and zip code please`);
      return false;
    case `tftt`:
      alert(`Check your zip code please`);
      return false;
    case `ttft`:
      alert(`Your password isn't long enough`);
      return false;
    case `fttt`: {
      alert(`Give us your goddamn email`);
      return false;
    }
    case `tttf`: {
      alert(`Your passwords don't match!`);
      return false;
    }
    case `tttt`: {
      alert(`Thanks for your info!`);
      practiceForm.reset();
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

passwordInput.addEventListener(`input`, function () {
  checkPasswordLength();
  checkPasswordMatch();
});

confirmPasswordInput.addEventListener(`input`, function () {
  checkPasswordLength();
  checkPasswordMatch();
});

practiceForm.addEventListener(`submit`, function (event) {
  event.preventDefault();
  let results = gatherResults();
  checkForm(results);
});
