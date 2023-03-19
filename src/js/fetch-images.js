import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '21612305-46cc4eea5f599b85b8ca50cca'

export  async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}




// key: '21612305-46cc4eea5f599b85b8ca50cca',
// q: 'images',
// image_type: 'photo',
// orientation: 'horizontal',
// safesearch: true,
// page: 1,
// per_page: 40,
// };