import './sass/index.css'
import {fetchImages} from './js/fetch-images'
import {renderGallery} from './js/render-gallery'
import { onScroll, onToTopBtn } from './js/scroll';

import { Notify } from "notiflix";
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'


const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load-more');

let query = '';
let page = 1;
let perPage = 40;

const galleryBox = new SimpleLightbox('.gallery a');


searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

onScroll();

async function onSearchForm(e) {
  e.preventDefault();
  window.scrollTo({ top: 0 });
  page = 1;
  query = e.currentTarget.searchQuery.value.trim();
  gallery.innerHTML = '';
  loadMoreBtn.classList.add('is-hidden');

if (query === '') {
    Notify.warning(
      'The search string cannot be empty. Please specify your search query.'
    );
return; 
}

fetchImages(query, page, perPage)
  .then(({ data }) => {
    if (data.totalHits === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
);  
  } else {
    renderGallery(data.hits);
    galleryBox.refresh();
      Notify.success(`Hooray! We found ${data.totalHits} images.`);
    if (data.totalHits > perPage) {
        loadMoreBtn.classList.remove('is-hidden');
    }}
  })  
    .catch(error => console.log(error));
  }

 function onLoadMoreBtn() {
  page += 1;
  galleryBox.refresh();

  fetchImages(query, page, perPage)
    .then(({ data }) => {
      renderGallery(data.hits);
      galleryBox.refresh();

      const totalPages = Math.ceil(data.totalHits / perPage);

      if (page > totalPages) {
        loadMoreBtn.classList.add('is-hidden');
       return Notify.failure("We're sorry, but you've reached the end of search results.")
      }
    })
    .catch(error => console.log(error));
}