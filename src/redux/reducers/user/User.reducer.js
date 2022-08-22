import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user:{}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user
    },
  },
});
export default userSlice;
