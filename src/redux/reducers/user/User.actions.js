import GoogleLogin from '../../../utils/SignMethods';
import userSlice from './User.reducer';

const {login} = userSlice.actions;

export const loginApi = () => dispatch => {
  dispatch(login('Logged in'));
};
export const googleSignInApi = () => dispatch => {
  return GoogleLogin()
    .then(data => console.log('Data', data))
    .catch(err => console.log('caught err', err));
};
