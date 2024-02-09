import { IUser } from "interfaces";

export interface IPostAd {
  title: string;
  description: string;
  price: string;
  location: string;
  images: string[];
  category?: string;
  owner: string | IUser;
  engineSize?: string | number;
  mileage?: string | number;
  manufacturedAt?: string;
  color: string;
  
}

export interface ILoginForm {
  phone: string | number;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  name: string;
}
