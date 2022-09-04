import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/MainStore';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

function Navigation() {
  const isAuth = useSelector((state: RootState) => !!state.auth.token);

  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <MainNavigator />}
    </NavigationContainer>
  );
}

export default Navigation;