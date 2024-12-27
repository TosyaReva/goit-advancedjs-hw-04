import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import fetchImage from './js/pixabay-api';

const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchValue = event.target.search.value.trim();
  if (!searchValue)
    return iziToast.warning({
      position: 'topRight',
      message: 'Please fill-in the search input',
    });
  fetchImage(searchValue);
});
