// import { throttle } from 'throttle-debounce';
const refs = {
  searchForm: document.querySelector('#search-form'),
  searchBtn: document.querySelector('.submit-btn'),
  div: document.querySelector('.div'),
  gallery: document.querySelector('.gallery'),
  toTopBtn: document.querySelector('.btn-to-top'),
   loadMore: document.querySelector('[data-action="load-more"]')
};

let rootEl = document.documentElement;

function trackScroll() {
  if (rootEl.scrollTop - document.documentElement.clientHeight > 0) {
   
    // refs.toTopBtn.classList.remove('is-hidden');
  } else {
    refs.toTopBtn.classList.add('is-hidden');
  }
}
function backToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export { trackScroll, backToTop };