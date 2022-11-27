import React, { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import {
  IAunthenticateResponse,
  ICredentials,
  IUserAuthRequest,
} from '../interfaces';
import { signInRequest } from '../services/requisitions/UsersRequests';

interface IAuthContext {
  user: IUserAuthRequest;
  signIn: (credentials: ICredentials) => Promise<void>;
  token: string;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [authResponse, setAuthResposne] = useState<IAunthenticateResponse>(
    {} as IAunthenticateResponse,
  );

  const signIn = async ({ email, password }: ICredentials) => {
    const response = await signInRequest({ email, password });

    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer`;

    setAuthResposne({
      token,
      user,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user: authResponse.user, signIn, token: authResponse.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
