import api from '../api';
import { ICredentials } from '../interfaces';

const signInRequest = async ({ email, password }: ICredentials) => {
  const response = await api.post('/sessions', {
    email,
    password,
  });

  return response;
};

export { signInRequest };
