import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
const rnBiometrics = new ReactNativeBiometrics();
export const AskForBiometric = type => {
  rnBiometrics
    .simplePrompt({promptMessage: `Confirm ${type}`})
    .then(resultObject => {
      const {success} = resultObject;
      if (success) {
        console.log('successful biometrics provided');
      } else {
        console.log('user cancelled biometric prompt', resultObject);
      }
    })
    .catch(() => {
      console.log('biometrics failed');
    });
};
export const BiometricAuthentication = async () => {
  rnBiometrics.isSensorAvailable().then(resultObject => {
    const {available, biometryType} = resultObject;
    console.log('resultObject', available, resultObject);
    if (available && biometryType === BiometryTypes.TouchID) {
      AskForBiometric('Touch ID');
    } else if (available && biometryType === BiometryTypes.FaceID) {
      AskForBiometric('Face ID');
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      AskForBiometric('Biometric');
    } else {
      console.log('Biometrics not supported');
    }
  });
};
