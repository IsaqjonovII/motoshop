import { IUser } from "interfaces";

export interface IPostAd {
  name: string;
  description: string;
  price: string;
  location: string;
  images: string[];
  category?: string;
  owner: string | IUser;
  engineSize?: string | number;
  mileage?: string | number;
  manufacturedAt?: string;
  contactLinks?: string[];
}

export interface ILoginForm {
  phone: string | number;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  name: string;
}
