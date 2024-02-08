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
  name: string;
  description: string;
  price: string;
  location: string;
  images: string[];
  category: string;
  owner: string | IUser;
  engineSize?: string | number;
  mileage?: string | number;
  manufacturedAt?: string;
  contactLinks?: string[];
  postedAt: Date;
  views: number | string;
}
