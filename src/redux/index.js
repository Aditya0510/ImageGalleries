import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ImageGallerySlice from './reducers/ImageGallery/ImageList.reducer';
import userSlice from './reducers/user/User.reducer';
import { persistReducer,persistStore } from 'redux-persist';
const reducer = combineReducers({
  imageGallery: ImageGallerySlice.reducer,
  user: userSlice.reducer,
  // here we will be adding reducers
});
const persistConfig ={
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig,reducer)
export const store = configureStore({
  reducer:persistedReducer,
});
export const persistor = persistStore(store)