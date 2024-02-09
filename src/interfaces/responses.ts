import { IUser } from "interfaces";

export interface IRecommendCard {
  _id: string;
  price: string;
  name: string;
  images: string[];
  postedAt: string;
  location: string;
}
export interface IAd {
  _id: string;
  title: string;
  owner: IUser;
  price: string;
  postedAt: Date;
  location: string;
  images: string[];
  category: string;
  description: string;
  manufacturedAt: string;
  views: number | string;
  mileage?: string | number;
  engineSize?: string | number;
  color: string;
  likes: number | string;
}
