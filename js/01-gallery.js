import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML('afterbegin', addMarkap(galleryItems))
gallery.addEventListener('click', handlerChoosePic)

function addMarkap(arr) {
    return arr.map(({ preview, original, description }) =>`
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`
    ).join('')
}

function handlerChoosePic(event) {
    event.preventDefault()

    if (!event.target.classList.contains("gallery__image")) {
        return
    }
    const instance = basicLightbox.create( `<img src="${event.target.dataset.source}" width="800" height="600"/>`)
    instance.show()

    document.addEventListener("keydown", handlerEscape);

    function handlerEscape({code }) {
        if (code !== 'Escape') {
            return
        }
        instance.close(() => document.removeEventListener("keydown", handlerEscape))
    }
}

