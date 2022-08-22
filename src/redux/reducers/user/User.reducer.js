import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
  },
});
export default userSlice;
