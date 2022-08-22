import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ImageGallerySlice from './reducers/ImageGallery/ImageList.reducer';
import userSlice from './reducers/user/User.reducer';

const reducer = combineReducers({
  imageGallery: ImageGallerySlice.reducer,
  user: userSlice.reducer,
  // here we will be adding reducers
});

export const store = configureStore({
  reducer,
});
