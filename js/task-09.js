function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const widgetTextEl = document.querySelector('.color');

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  widgetTextEl.textContent = getRandomHexColor();
}

btnChangeColor.addEventListener('click', changeBodyColor);
