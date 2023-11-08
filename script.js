const practiceForm = document.getElementById(`practiceForm`);
const emailInput = document.getElementById(`emailInput`);
const emailError = document.getElementById(`emailError`);
const zipInput = document.getElementById(`zipInput`);
const passwordInput = document.getElementById(`passwordInput`);
const confirmPasswordInput = document.getElementById(`confirmPasswordInput`);

practiceForm.reset();

emailInput.addEventListener(`input`, function () {
  if (emailInput.validity.typeMismatch) {
    console.log(`non-email detected in email input`);
    emailError.textContent = `^^That's not a real email`;
    emailError.classList.add(`active`);
  } else if (emailInput.value == ``) {
    emailError.textContent = `Email is required`;
    emailError.classList.add(`active`);
    emailInput.classList.add(`invalid`);
  } else {
    emailError.textContent = ``;
    emailError.classList.remove(`active`);
    emailInput.classList.remove(`invalid`);
  }
});

zipInput.addEventListener(`input`, function () {
  console.log(zipInput.value);
  if (zipInput.value == ``) {
    console.log(`empty string detected`);
    zipError.textContent = `Requires a 5 digit number`;
    zipError.classList.add(`active`);
    zipInput.classList.add(`invalid`);
  } else if (zipInput.value.length < 5) {
    zipError.textContent = `Too short`;
    zipError.classList.add(`active`);
    zipInput.classList.add(`invalid`);
  } else if (zipInput.value.length > 5) {
    zipError.textContent = `Too long`;
    zipError.classList.add(`active`);
    zipInput.classList.add(`invalid`);
  } else {
    zipError.textContent = ``;
    zipError.classList.remove(`active`);
    zipInput.classList.remove(`invalid`);
  }
});

practiceForm.addEventListener(`submit`, function (event) {
  event.preventDefault();
});
