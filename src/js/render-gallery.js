const gallery = document.querySelector('.gallery')
// const galleryEl = document.querySelector('.gallery .a')

export function renderGallery(images) {
    const markup = images
      .map(image => {
        const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image
        return `
          <a class="gallery__link" href="${largeImageURL}">
            <div class="gallery-item" id="${id}">
              <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
              <div class="info">
                <p class="info-item"><b>Likes</b>${likes}</p>
                <p class="info-item"><b>Views</b>${views}</p>
                <p class="info-item"><b>Comments</b>${comments}</p>
                <p class="info-item"><b>Downloads</b>${downloads}</p>
              </div>
            </div>
          </a>
        `
      })
      .join('')
  
    gallery.insertAdjacentHTML('beforeend', markup)
  }


  // const baseUrl = 'https://pixabay.com/api/';
// const SearchParameters = {
//     key: '21612305-46cc4eea5f599b85b8ca50cca',
//     q: 'images',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: 1,
//     per_page: 40,
// };