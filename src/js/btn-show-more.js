const loadMore = document.querySelector('.load-more');

function showLoadMore({ page, total, per_page }) {
  if (total - (page - 1) * per_page > 0) {
    btnMoreShow();
    return false;
  } else {
    btnMoreHide();
    return true;
  }
}

function btnMoreShow() {
  loadMore.hidden = false;
}

function btnMoreHide() {
  loadMore.hidden = true;
}

export { showLoadMore, btnMoreHide };
