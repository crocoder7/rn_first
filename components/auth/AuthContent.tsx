import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../UI/FlatButton';
import AuthForm from './AuthForm';
import { Colors } from '../../styles/Styles';
import { StackParams } from '../navigation/AuthNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

function AuthContent({ isLogin, onAuthenticate }:{isLogin?:any, onAuthenticate:Function}) {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate('Signup');
    } else {
      navigation.navigate('Login');
    }
  }

  function submitHandler(credentials: any) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 32,
    marginHorizontal: 32,
    padding: 16,
  },
  buttons: {
    marginTop: 12,
  },
});
