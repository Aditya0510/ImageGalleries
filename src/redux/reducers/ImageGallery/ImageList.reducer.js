import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  imageList: [],
};
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async amount => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   },
// );
const ImageGallerySlice = createSlice({
  name: 'ImageList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveImages: (state, action) => {
      state.imageList = action.payload;
    },
  },
});
export default ImageGallerySlice;
