
import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems.map((image) => { 
  return `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>`
}).join("");

gallery.innerHTML = galleryImages;

function selectImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  
  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 27) {
      instance.close();
    }
  });
}

gallery.addEventListener("click", selectImage);
