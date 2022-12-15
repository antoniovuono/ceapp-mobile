import { api } from '../api';

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

export { listByLicensePlate };
