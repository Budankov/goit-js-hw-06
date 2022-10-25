const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('change', rangeValue);

function rangeValue(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
