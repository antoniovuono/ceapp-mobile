import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { IParks } from '../interfaces';
import { api } from '../services/api';

interface IAuthContext {
  getParks: (token: string) => Promise<any>;
  createParks: (
    car_id: string,
    car_brand: string,
    car_model: string,
    car_color: string,
    token: string,
  ) => Promise<any>;
  openParks: IParks[];
  searchOpenPark: (license_plate: string, token: string) => Promise<void>;
}

interface IAuthProvider {
  children: ReactNode;
}

const ParkContext = createContext<IAuthContext>({} as IAuthContext);

const ParkProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [openParks, setOpenParks] = useState<IParks[]>([]);

  const createParks = useCallback(
    async (
      car_id: string,
      car_brand: string,
      car_model: string,
      car_color: string,
      token: string,
    ) => {
      const jwt = {
        Authorization: `Bearer ${token}`,
      };

      const response = await api.post(
        '/park',
        {
          car_id,
          car_brand,
          car_model,
          car_color,
        },
        {
          headers: jwt,
        },
      );

      return response.data;
    },
    [],
  );

  const getParks = useCallback(async (token: string) => {
    const response = await api.get('/park/park-list', {
      headers: { Authorization: `Bearer ${token}` },
    });

    const openParksFilter = response.data.filter(
      (element: { left_date: null }) => {
        return element.left_date === null;
      },
    );
    setOpenParks(openParksFilter);
  }, []);

  const searchOpenPark = useCallback(
    async (license_plate: string, token: string) => {
      const jwt = {
        Authorization: `Bearer ${token}`,
      };

      const response = await api.get('park/list-by-plate', {
        params: { license_plate },
        headers: jwt,
      });

      console.log('response', response.data);

      setOpenParks(response.data);
    },
    [],
  );

  return (
    <ParkContext.Provider
      value={{
        getParks,
        createParks,
        openParks,
        searchOpenPark,
      }}
    >
      {children}
    </ParkContext.Provider>
  );
};

const usePark = () => {
  const context = useContext(ParkContext);
  return context;
};

export { ParkProvider, usePark };
