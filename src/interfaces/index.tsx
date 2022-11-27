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

interface IParks {
  id: string;
  user_id: string;
  car_id: string;
  car_brand: string;
  car_model: string;
  car_color: string;
  departure_date: string;
  left_date: string;
  total_amount: string;
}

export {
  IUserAuthRequest,
  ICredentials,
  IAunthenticateResponse,
  ICreateAccount,
  IParks,
};
