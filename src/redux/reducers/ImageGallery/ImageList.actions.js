import ImageGallerySlice from './ImageList.reducer';

const {saveImages} = ImageGallerySlice.actions;
export const fetchImages = () => async dispatch => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
      dispatch(saveImages(data));
      return Promise.resolve(data?.imageList);
    })
    .catch(err => Promise.reject(err.message));
};
