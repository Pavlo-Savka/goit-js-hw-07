import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
for (let item of galleryItems) {
    let largeImg = item.original; 
    let smallImg = item.preview;
    let description = item.description;
    gallery.insertAdjacentHTML('beforeend', 
`<a class="gallery__item" href="${largeImg}">
  <img class="gallery__image" src="${smallImg}" alt="${description}" />
</a>`)
};

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
 });


console.log(galleryItems);
