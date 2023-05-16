import { galleryItems } from './gallery-items.js';

// Change code below this line

const ref = {
    gallery: document.querySelector('.gallery'),
}
let instance;
const basicLightboxParams = {
    onShow: (instance) => {
        window.addEventListener('keydown', onHandelEscape)
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onHandelEscape)
    }
}

const markup = galleryItems.map((elem) => {
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


ref.gallery.insertAdjacentHTML('beforeend', markup);
ref.gallery.addEventListener('click', onHandelOpenImg);

function onHandelOpenImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`, basicLightboxParams);

    instance.show();
}

function onHandelEscape(event) {
    if (event.code === 'Escape') {
        instance.close();
    };
}

