import {GoogleLogin, GoogleLogout } from '../../../utils/SignMethods';
import userSlice from './User.reducer';
const {login,logOut } = userSlice.actions;

export const loginApi = (userData) => dispatch => {
  dispatch(login({token:userData?.idToken,user:userData?.user}));
};

export const googleSignInApi = () => dispatch => {
  return GoogleLogin()
    .then(data => dispatch(loginApi(data)))
    .catch(err => console.log('caught err', err));
};

export const logOutApi = () => async dispatch => {
 return GoogleLogout().then(()=> dispatch(logOut())).catch(err=>console.log("Logout error",err))  
};