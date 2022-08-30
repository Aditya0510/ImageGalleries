import {View} from 'react-native';
import React from 'react';

import {DefaultButton} from '../../components/defaultComponents';
import {useDispatch} from 'react-redux';
import {googleSignInApi} from '../../redux/reducers/user/User.actions';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const Login = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, padding: wp(5), backgroundColor: '#fff'}}>
      <DefaultButton
        ContainerStyle={{backgroundColor: 'rgb(187,57,46)'}}
        onPress={() => dispatch(googleSignInApi())}
      />
    </View>
  );
};

export default Login;
