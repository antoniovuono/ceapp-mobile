import React, { ReactNode } from 'react';
import { ParkProvider } from './park';
import { AuthProvider } from './user.authenticate';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return (
    <ParkProvider>
      <AuthProvider>{children}</AuthProvider>
    </ParkProvider>
  );
};

export default AppProvider;
