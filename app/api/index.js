import request from '../utils/request';

export default {
  fetchPhotos: () => request('https://jsonplaceholder.typicode.com/photos')
};
