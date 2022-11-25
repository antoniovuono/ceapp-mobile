import React, { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import {
  IAunthenticateResponse,
  ICredentials,
  IUserAuthRequest,
} from '../services/interfaces';
import { signInRequest } from '../services/requisitions/UsersRequests';

interface IAuthContext {
  user: IUserAuthRequest;
  signIn: (credentials: ICredentials) => Promise<void>;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [authResponse, setAuthResposne] = useState<IAunthenticateResponse>(
    {} as IAunthenticateResponse,
  );

  console.log(authResponse);

  const signIn = async ({ email, password }: ICredentials) => {
    const response = await signInRequest({ email, password });

    console.log(response.data);

    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer`;

    setAuthResposne({
      token,
      user,
    });
  };

  return (
    <AuthContext.Provider value={{ user: authResponse.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
