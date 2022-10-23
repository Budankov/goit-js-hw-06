const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// #1
// const galleryListEl = document.querySelector('.gallery');

// const imageEl = images.map(img => {
//   const gallaryItemEl = document.createElement('li');
//   gallaryItemEl.classList.add('js-gallery-item');

//   const imgEl = document.createElement('img');
//   imgEl.src = img.url;
//   imgEl.alt = img.alt;
//   imgEl.classList.add('js-gallery-img');

//   gallaryItemEl.appendChild(imgEl);

//   return gallaryItemEl;
// });

// galleryListEl.append(...imageEl);

// #2
const galleryListEl = document.querySelector('.gallery');

const makeGalleryEl = ({ url, alt }) =>
  `<li class="js-gallery-item"><img src="${url}" alt="${alt}" class="js-gallery-img"></li>`;

const makeGalleryItem = images.map(makeGalleryEl).join('');

galleryListEl.insertAdjacentHTML('beforeend', makeGalleryItem);
