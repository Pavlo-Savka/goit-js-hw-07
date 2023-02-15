import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
for (let item of galleryItems) {
    let largeImg = item.original; 
    let smallImg = item.preview;
    let description = item.description;
gallery.insertAdjacentHTML('beforeend', `<div class= "gallery__item">
  <a class="gallery__link" href="${largeImg}">
    <img
      class="gallery__image"
      src="${smallImg}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`)
};

const selectImg = (event) => {
    if (event.target.nodeName !== "IMG") {return};
  const selectedImg = event.target.parentNode.href; 
  event.preventDefault();
  const instance = basicLightbox.create(`<img src="${selectedImg}" width = "800" height = "600">`);
  instance.show();

  document.addEventListener("keydown", event => {
    if (event.code === 'Escape') {
      instance.close();
    };
  },
   { once: true }
  );
}
gallery.addEventListener("click", selectImg);