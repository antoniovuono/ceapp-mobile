import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './user.stack.routes';
import AuthRoutes from './user.auth.routes';
import { useAuth } from '../hooks/user.authenticate';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
