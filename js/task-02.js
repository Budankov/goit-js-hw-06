const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsElement = document.querySelector('#ingredients');

const createIngredientsList = ingredients.map(element => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = element;
  return ingredientsItemEl;
});

ingredientsElement.append(...createIngredientsList);
