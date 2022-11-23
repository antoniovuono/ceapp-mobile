import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../modules/Authentication/SignIn';
import SignUp from '../modules/Authentication/SignUp';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthRoutes;
