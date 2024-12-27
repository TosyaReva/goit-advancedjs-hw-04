import iziToast from 'izitoast';

import { renderGallery, resetGalelry } from './render-functions';
import { loaderShow, loaderHide } from './loader';

const key = '29951838-c03d41fde620325ff539c52c5';
const baseURL = 'https://pixabay.com/api/?';

function fetchImage(query) {
  return new Promise((resolve, reject) => {
    resetGalelry();
    loaderShow();

    const searchParams = new URLSearchParams({
      key,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: query || '',
    }).toString();

    fetch(baseURL + searchParams, {
      method: 'GET',
    })
      .then(resolve)
      .catch(reject);
  })
    .then(response => {
      if (response.status !== 200 || !response.ok)
        throw new Error(response.status);

      return response.json();
    })
    .then(data => {
      if (data.totalHits === 0) throw new Error('Empty response');
      renderGallery(data);
    })
    .catch(error => {
      iziToast.warning({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      loaderHide();
    });
}

export default fetchImage;
