import { galleryItems } from './gallery-items.js';

// Change code below this line


const ref = {
    gallery: document.querySelector('.gallery'),
}

const galleryItemsArr = galleryItems.map((elem) => {
    return `<li class="gallery__item" >
  <a class="gallery__link" href="${elem.original}"  >
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</li>`
}).join('');


ref.gallery.insertAdjacentHTML('beforeend', galleryItemsArr);
ref.gallery.addEventListener('click', onHandelOpenImg);

let instance;

function onHandelOpenImg(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    window.addEventListener('keydown', onHandelEscape)
    event.preventDefault();
    instance.show();

}

function onHandelEscape(event) {
    if (event.code === 'Escape') {
        instance.close();

        removeEscape();
    };
}

function removeEscape() {
    window.removeEventListener('keydown', onHandelEscape)
}