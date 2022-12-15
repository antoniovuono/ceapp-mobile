import { api } from '../api';
import { ICreateAccount } from '../../interfaces';

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

export { signUpRequest };
