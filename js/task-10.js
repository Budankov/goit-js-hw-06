function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnCreateEl: document.querySelector('#controls button[data-create'),
  btnDestroyEl: document.querySelector('#controls button[data-destroy'),
  inptutValueEl: document.querySelector('#controls input'),
  boxesEl: document.querySelector('#boxes'),
};

function onCreateEl() {
  createBoxes(Number(refs.inptutValueEl.value));
}

function createBoxes(amount) {
  let markup = ``;

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }

  refs.boxesEl.insertAdjacentHTML('beforeend', markup);

  const arr = [...refs.boxesEl.children];

  arr.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inptutValueEl.value = '';
}

refs.btnCreateEl.addEventListener('click', onCreateEl);
refs.btnDestroyEl.addEventListener('click', destroyBoxes);
