const loadMore = document.querySelector('.load-more');

function showLoadMore({ page, total, per_page }) {
  if (total - (page - 1) * per_page > 0) {
    btnMoreShow();
  } else {
    btnMoreHide();
  }
}

function btnMoreShow() {
  loadMore.hidden = false;
}

function btnMoreHide() {
  loadMore.hidden = true;
}

function isbtnMoreHidden() {
  return loadMore.hidden === true;
}

export { showLoadMore, btnMoreHide, isbtnMoreHidden };
