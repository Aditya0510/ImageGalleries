import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ImageGallerySlice from './reducers/ImageGallery/ImageList.reducer';
const reducer = combineReducers({
  imageGallery: ImageGallerySlice.reducer,
  // here we will be adding reducers
});

export const store = configureStore({
  reducer,
});
