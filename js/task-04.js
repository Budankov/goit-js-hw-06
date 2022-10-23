let counterValue = 0;

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const valueEl = document.querySelector('#value');

const decrement = () => (valueEl.textContent = counterValue -= 1);
const increment = () => (valueEl.textContent = counterValue += 1);

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
