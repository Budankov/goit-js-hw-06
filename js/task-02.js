const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const createIngredientsList = ingredients.map(element => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = element;
  return ingredientsItemEl;
});

ingredientsEl.append(...createIngredientsList);
