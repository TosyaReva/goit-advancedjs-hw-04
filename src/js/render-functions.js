import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightBox = new SimpleLightbox('.gallery .gallery-item a', {
  captionDelay: 250, //ms
  captionsData: 'alt',
});
window.qwerty = lightBox;
function renderGallery(data) {
  let markup = '';
  let x = '';
  data.hits.forEach(item => {
    markup += `
        <li class="gallery-item">
            <a href="${item.largeImageURL}">
                <div class="image-wrapper"><img src="${item.webformatURL}" alt="${item.tags}" /></div>
                <ul class="image-description">
                    <li class="gallery-description">
                        <h3 class="description-title">Likes</h3>
                        <p class="description-value">${item.likes}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Views</h3>
                        <p class="description-value">${item.views}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Comments</h3>
                        <p class="description-value">${item.comments}</p>
                    </li>
                    <li class="gallery-description">
                        <h3 class="description-title">Downloads</h3>
                        <p class="description-value">${item.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>
        `;
  });
  gallery.innerHTML = markup + '<li class="gallery-item">';
  //   gallery.innerHTML = `<ul>${markup}</ul>`;
  lightBox.refresh();
}
function resetGalelry() {
  gallery.innerHTML = '';
}

export { renderGallery, resetGalelry };
