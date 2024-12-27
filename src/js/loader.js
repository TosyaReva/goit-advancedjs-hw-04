const loader = document.querySelector('.loader');
function loaderShow() {
  loader.hidden = false;
}

function loaderHide() {
  loader.hidden = true;
}

export { loaderShow, loaderHide };
