import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import {
  IAunthenticateResponse,
  ICredentials,
  IUserAuthRequest,
} from '../interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const userStorageKey = '@ceapp:user';

  const signIn = async ({ email, password }: ICredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.authorization = `Bearer`;

    setAuthResposne({
      token,
      user,
    });
    await AsyncStorage.setItem(userStorageKey, JSON.stringify({ token, user }));
  };

  const addParkPrices = useCallback(
    async (firsrt_hour: number, other_hours: number, token: string) => {
      const jwt = { Authorization: `Bearer ${token}` };

      const response = await api.patch(
        '/users/add-prices',
        {
          firsrt_hour,
          other_hours,
        },
        {
          headers: jwt,
        },
      );

      return response.data;
    },
    [],
  );

  useEffect(() => {
    const loadUserStoraged = async () => {
      const userStoraged = await AsyncStorage.getItem(userStorageKey);

      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged);
        setAuthResposne(userLogged);
      }
    };

    loadUserStoraged();
  }, []);

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
