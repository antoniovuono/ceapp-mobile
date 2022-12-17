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
  deletePark: (id: string, token: string) => Promise<void>;
  exitCar: (park_id: string, token: string) => Promise<void>;
  openParks: IParks[];
  closedParks: IParks[];
}

interface IAuthProvider {
  children: ReactNode;
}

const ParkContext = createContext<IAuthContext>({} as IAuthContext);

const ParkProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [openParks, setOpenParks] = useState<IParks[]>([]);
  const [closedParks, setClosedParks] = useState<IParks[]>([]);

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
    try {
      const response = await api.get('/park/park-list', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const openParksFilter = response.data.filter(
        (element: { left_date: null }) => {
          return element.left_date === null;
        },
      );

      const closedParksFilter = response.data.filter(
        (element: { left_date: null }) => {
          return element.left_date !== null;
        },
      );

      setClosedParks(closedParksFilter);
      setOpenParks(openParksFilter);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const deletePark = useCallback(async (park_id: string, token: string) => {
    const jwt = {
      Authorization: `Bearer ${token}`,
    };
    const response = await api.delete(`park/${park_id}`, {
      headers: jwt,
    });

    return response.data;
  }, []);

  const exitCar = useCallback(async (park_id: string, token: string) => {
    const jwt = {
      Authorization: `Bearer ${token}`,
    };
    const response = await api.patch(
      `park/exit-car/${park_id}`,
      {},
      { headers: jwt },
    );

    return response.data;
  }, []);

  return (
    <ParkContext.Provider
      value={{
        getParks,
        createParks,
        openParks,
        deletePark,
        exitCar,
        closedParks,
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
