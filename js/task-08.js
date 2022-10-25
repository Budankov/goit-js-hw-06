// #1
// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formEl = event.currentTarget.elements;
//   const mail = formEl.email.value;
//   const password = formEl.password.value;

//   if (mail === '' || password === '') {
//     return alert('Будь ласка, заповніть усі поля!');
//   }
//   const formData = {
//     mail,
//     password,
//   };
//   event.currentTarget.reset();
//   console.log(formData);
// }

// #2
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}
