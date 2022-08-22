import Geolocation from '@react-native-community/geolocation';
import {Alert, Linking, PermissionsAndroid, Platform} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();
export const AskForBiometric = type => {
  return rnBiometrics
    .simplePrompt({promptMessage: `Confirm ${type}`})
    .then(resultObject => {
      const {success} = resultObject;
      if (success) {
        console.log('successful biometrics provided');
        return true;
      } else {
        console.log('user cancelled biometric prompt', resultObject);
        return Promise.reject('User Cancellation');
      }
    })
    .catch(() => {
      console.log('biometrics failed');
      return Promise.reject('Authentication failed');
    });
};
export const BiometricAuthentication = async () => {
  return rnBiometrics
    .isSensorAvailable()
    .then(resultObject => {
      const {available, biometryType} = resultObject;
      console.log('resultObject', available, resultObject);
      if (available && biometryType === BiometryTypes.TouchID) {
        return AskForBiometric('Touch ID');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        return AskForBiometric('Face ID');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        return AskForBiometric('Biometric');
      } else {
        console.log('Biometrics not supported');
        return 'No device found';
      }
    })
    .catch(err => Promise.reject(err));
};

export const getCurrentLocation = (setFunc, locationError = null) => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This App needs access to your location ' +
            'so we can know where you are.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use locations ');
        getCurrentLocation(setFunc);
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const handleError = errorObj => {
    if (errorObj?.message === 'User denied access to location services.') {
      Geolocation.requestAuthorization();
      if (Platform.OS === 'android') {
        requestLocationPermission();
      } else if (Platform.OS === 'ios') {
        Alert.alert(
          'Permission Denied',
          'This app require your current location. please Go to settings->',
          [
            {
              text: 'Allow',
              onPress: () => Linking.openURL('app-settings:'),
              style: 'cancel',
            },
          ],
          {
            cancelable: false,
          },
        );
      }
    }
  };
  return Geolocation.getCurrentPosition(
    position => {
      setFunc(position?.coords);
    },
    error => locationError(error),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  ).catch(err => Promise.reject(err));
};
