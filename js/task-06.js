const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', isTheLengthInputCorrect);

function isTheLengthInputCorrect(event) {
  if (
    Number.parseInt(event.currentTarget.value.length) === Number.parseInt(inputEl.dataset.length)
  ) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
