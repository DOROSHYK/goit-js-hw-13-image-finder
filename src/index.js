import './style.css';
import fetchImage from './js/fetchImg';
import imageCard from './templates/imageCard.hbs';
import openBigImg from './js/modal';
import { trackScroll, backToTop } from './js/to-top'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { defaults, error } from '@pnotify/core';
import { async } from 'fast-glob';
// import LoadMoreBtn from './js/loadMoreBtn';

defaults.mouseReset = false;
defaults.delay = 3000;

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchBtn: document.querySelector('.submit-btn'),
  div: document.querySelector('.div'),
  gallery: document.querySelector('.gallery'),
    toTopBtn: document.querySelector('.btn-to-top'),
  loadMore: document.querySelector('[data-action="load-more"]')
};

const ApiService = new fetchImage();


refs.searchForm.addEventListener('submit', searchImg);
refs.gallery.addEventListener('click', openBigImg);
refs.toTopBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', trackScroll);
refs.loadMore.addEventListener('click', loadMoreImg)

function loadMoreImg() {

    addImg();
   
    scrollAfterLoad();

}

function searchImg(event) {
    event.preventDefault();
    refs.loadMore.classList.remove('is-hidden');

    ApiService.query = event.currentTarget.elements.query.value;

    if (ApiService.query === '') {
        error({
            title: 'You did not enter anything',
            text: 'Please,try again.',
        });
        
        return
    }

    ApiService.resetPage();
    refs.loadMore.classList.add('is-hidden');
    clearContainer();
    addImg();
event.currentTarget.elements.query.value = '';
}



function addImg() {
    
    ApiService.fetchImage()
        .then(hits => {
            if (hits.length === 0) {
         
            error({
                title: 'There is no picture with this name',
                text: 'Please,try again.',
            });
            return;
         }
        addContainer(hits);

    })
        .catch(error => console.log(error));
}

function addContainer(img) {
    refs.gallery.insertAdjacentHTML('beforeend', imageCard(img));
}


function clearContainer() {
    refs.gallery.innerHTML = '';
}

function scrollAfterLoad() {
    try {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth',
            });
        }, 1000)
    } catch (error) {
    console.log(error);
}
}



//  function trackScrollLoadMore() {
//     const scrolled = window.pageYOffset;
//     const coords = document.documentElement.clientHeight;

//     if (scrolled) {
//        refs.loadMore.classList.add('is-hidden');
//     }
//     if (scrolled < coords) {
//        refs.loadMore.classList.remove('is-hidden');
//     }
//   }



  

//   window.addEventListener('scroll', trackScrollLoadMore);
//   refs.loadMore.addEventListener('click', backToTop);
