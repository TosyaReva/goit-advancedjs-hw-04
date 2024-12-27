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

//   {
//     id: 3082832,
//     pageURL: 'https://pixabay.com/photos/nature-waters-lake-island-3082832/',
//     type: 'photo',
//     tags: 'nature, waters, lake',
//     previewURL:
//       'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_150.jpg',
//     previewWidth: 150,
//     previewHeight: 84,
//     webformatURL:
//       'https://pixabay.com/get/g7c998dd9d2abbde659cda1f0249a3fa2121c05c2340f5013227462ad276464ac56a083ffafbe9603bfa37e7f281a24505158ecb329b975a735a6accb6bbe989d_640.jpg',
//     webformatWidth: 640,
//     webformatHeight: 359,
//     largeImageURL:
//       'https://pixabay.com/get/ge5e74ef666a59d4f737a297a84718a879748a32387afbf16eab5eac97a7886d3f7079abc1031e30220ea997546fbca49eb56427b35bb9c377856103442d31c27_1280.jpg',
//     imageWidth: 5757,
//     imageHeight: 3238,
//     imageSize: 4638828,
//     views: 7099132,
//     downloads: 4369967,
//     collections: 190242,
//     likes: 5214,
//     comments: 756,
//     user_id: 7645255,
//     user: 'jplenio',
//     userImageURL:
//       'https://cdn.pixabay.com/user/2024/06/10/13-43-32-848_250x250.jpg',
//   },
