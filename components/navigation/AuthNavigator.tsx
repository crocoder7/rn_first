import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/auth/LoginScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import { Colors } from '../../styles/Styles';

export type StackParams = {
  Signup: any;
  Login: any;
}

const Stack = createNativeStackNavigator<StackParams>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary100 },
        headerTintColor: 'black',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
