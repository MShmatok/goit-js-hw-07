import { galleryItems } from './gallery-items.js';
// Change code below this line


const ref = {
    gallery: document.querySelector('.gallery'),
}
const lightBoxParams = { caption: true, captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionDelay: 250, captionClass: 'center' };

const markup = galleryItems.map((elem) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${elem.original}">
      <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
   </a>
</li>`
}).join('');


ref.gallery.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery__item a', lightBoxParams);
