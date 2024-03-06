import { IUser } from "interfaces";

export interface IPostAd {
  title: string;
  description: string;
  price: {
    amount: string;
    currency: string;
    canBargain: boolean;
  };
  location: string;
  images: string[];
  owner: string | IUser;
  color: string[];
  adType: string;
}
export interface IMotoAd extends IPostAd {
  category: string;
  engineSize: string | number;
  mileage: string | number;
  manufacturedAt: string | string[];
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
