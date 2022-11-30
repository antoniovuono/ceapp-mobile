import { api } from '../api';

const createPark = async (
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
};

const listByLicensePlate = async (license_plate: string, token: string) => {
  const jwt = {
    Authorization: `Bearer ${token}`,
  };

  const response = await api.get('/park/list-by-plate', {
    params: {
      license_plate,
    },
    headers: jwt,
  });

  return response.data;
};

const deletePark = () => {};

export { createPark, listByLicensePlate };
