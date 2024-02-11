import { IUser } from "interfaces";

export interface IPostAd {
  title: string;
  description: string;
  price: string;
  location: string;
  images: string[];
  owner: string | IUser;
  color: string;
}
export interface IMotoAd extends IPostAd {
  category: string;
  engineSize: string | number;
  mileage: string | number;
  manufacturedAt: string;
}
export interface IGearAd extends IPostAd {
  size: string;
  condition: string;
  brand: string;
}

export interface ILoginForm {
  phone: string | number;
  password: string;
}

export interface IRegisterForm extends ILoginForm {
  name: string;
}
