import iziToast from 'izitoast';
import axios from 'axios';

import { renderGallery, resetGalelry } from './render-functions';
import { loaderShow, loaderHide } from './loader';
import { showLoadMore, btnMoreHide, isbtnMoreHidden } from './btn-show-more';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,
  params: { key: '29951838-c03d41fde620325ff539c52c5' },
});

const paginationConfig = {
  page: 1,
  total: null,
  query: '',
  per_page: 15,
};

async function fetchImage(query) {
  if (query) {
    paginationConfig.page = 1;
    resetGalelry();
    loaderShow();
  }
  btnMoreHide();

  const searchParams = {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: query || paginationConfig.query,
    per_page: paginationConfig.per_page,
    page: paginationConfig.page,
  };

  try {
    const response = await instance.request({
      params: searchParams,
    });

    paginationConfig.total = response.data.total;
    paginationConfig.page += 1;
    if (query) paginationConfig.query = query;

    if (response.status !== 200) throw new Error(response.status);

    const data = response.data;
    if (data.totalHits === 0) throw new Error('Empty response');

    renderGallery(data);
  } catch (error) {
    iziToast.warning({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }

  loaderHide();
  showLoadMore(paginationConfig);

  if (!query) scrollDown();
  if (!query && isbtnMoreHidden())
    iziToast.success({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
}

function scrollDown() {
  const { height } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: height, behavior: 'smooth' });
}

export default fetchImage;
