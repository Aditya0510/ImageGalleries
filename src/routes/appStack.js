import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageList from '../screens/ImageList';
import ImageView from '../screens/ImageView';
import {useSelector} from 'react-redux';
import Login from '../screens/Auth/login';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const userToken = useSelector(state => state?.user?.token);
  return (
    <Stack.Navigator initialRouteName="ImageList">
      {userToken ? (
        <>
          <Stack.Screen name="ImageList" component={ImageList} />
          <Stack.Screen name="ImageView" component={ImageView} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
