import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from 'react';
import { api } from '../services/api';

interface IAuthContext {
  getParks: (token: string) => Promise<any>;
}

interface IAuthProvider {
  children: ReactNode;
}

const ParkContext = createContext<IAuthContext>({} as IAuthContext);

const ParkProvider: React.FC<IAuthProvider> = ({ children }) => {
  const getParks = useCallback(async (token: string) => {
    const response = await api.get('/park/park-list', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  }, []);

  return (
    <ParkContext.Provider value={{ getParks }}>{children}</ParkContext.Provider>
  );
};

const usePark = () => {
  const context = useContext(ParkContext);
  return context;
};

export { ParkProvider, usePark };
