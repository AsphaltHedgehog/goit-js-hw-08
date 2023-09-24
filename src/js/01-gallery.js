// Описаний в документації
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const refs = {
  renderedGalleryList: document.querySelector(".gallery"),
  modalWindow: document.querySelector("div.basicLightbox")
};

// =========================================================


function imgTemplate (el) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
      class="gallery__image"
      src="${el.preview}" 
      alt="${el.description}"
      />
    </a>
</li>`
}


function renderGalleryElFromTemplate() {
  const markup = galleryItems.map(imgTemplate).join("");
  refs.renderedGalleryList.innerHTML = markup;
}

renderGalleryElFromTemplate();

// ========================================================

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: "img", captionsData: "alt", captionDelay: 250,});
