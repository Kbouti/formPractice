const practiceForm = document.getElementById(`practiceForm`);
const emailInput = document.getElementById(`emailInput`);
const emailError = document.getElementById(`emailError`);
const zipInput = document.getElementById(`zipInput`);
const passwordInput = document.getElementById(`passwordInput`);
const confirmPasswordInput = document.getElementById(`confirmPasswordInput`);

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

function checkForm() {
  let results = [];

  results.push(checkEmailInput());
  results.push(checkZipInput());

  console.log(results);
  const test = results === [false, false] 
  console.log(test);

  switch (results) {
    case [false, false]: 
        console.log(`switch triggered`)
      console.log(results);
      alert(`Check your email and zip code`);
      break;
    
    case [true, false]: 
        console.log(`switch triggered`)
        console.log(results);
      alert(`Check your zip code plz`);
      break;
    
    case [false, true]: {
        console.log(`switch triggered`)
      alert(`Give us your goddamn email`);
      break;
    }
    case [true, true]: {
        console.log(`switch triggered`)
      alert(`Thanks for your info!`);
      break;
    }
    default: console.log(`default`);
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

practiceForm.addEventListener(`submit`, function (event) {
  event.preventDefault();
  checkForm();
});
