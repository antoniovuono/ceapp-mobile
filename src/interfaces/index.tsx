interface ICreateAccount {
  name: string;
  email: string;
  password: string;
  cpf: string;
}

interface IUserAuthRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
  first_hour: number;
  other_hours: number;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IAunthenticateResponse {
  token: string;
  user: IUserAuthRequest;
}

export {
  IUserAuthRequest,
  ICredentials,
  IAunthenticateResponse,
  ICreateAccount,
};
