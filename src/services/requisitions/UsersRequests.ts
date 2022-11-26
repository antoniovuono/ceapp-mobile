import { api } from '../api';
import { ICreateAccount, ICredentials } from '../../interfaces';

const signInRequest = async ({ email, password }: ICredentials) => {
  const response = await api.post('/sessions', {
    email,
    password,
  });

  return response;
};

const signUpRequest = async ({
  name,
  email,
  password,
  cpf,
}: ICreateAccount) => {
  const response = await api.post('/users', {
    name,
    email,
    password,
    cpf,
  });

  return response.data;
};

export { signInRequest, signUpRequest };
