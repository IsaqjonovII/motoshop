import { IUser } from "interfaces";
import { IPostAd } from "./forms";

export interface IRecommendCard {
  _id: string;
  price: {
    amount: string | number;
    currency: string;
    canBargain: boolean;
  };
  name: string;
  images: string[];
  postedAt: string;
  location: string;
}
export interface IAdMoto extends IPostAd {
  _id: string;
  owner: IUser;
  postedAt: Date;
  likes: number;
  views: number;
}
export interface IAdHelmetAndGear extends IAdMoto {
  brand: string;
  size: string;
  condition: string;
}
export interface IMotoAd extends IAdMoto {
  category: string;
  manufacturedAt: string;
  mileage: string | number;
  engineSize: string | number;
}
