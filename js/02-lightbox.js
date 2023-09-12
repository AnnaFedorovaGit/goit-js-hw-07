
import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const galleryImages = galleryItems.map((image) => { 
  return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
  </li>`
}).join("");

gallery.innerHTML = galleryImages;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
