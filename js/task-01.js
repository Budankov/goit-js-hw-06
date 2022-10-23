// const listItemsEl = document.querySelectorAll('.item').length;
// console.log('Number of categories:', listItemsEl)

// const listItemsEl = document.querySelector('#categories');
// console.log('Number of categories:', listItemsEl.children.length)

const listItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemsEl.length}`);

const allCategoriesArray = listItemsEl.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
