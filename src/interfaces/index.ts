import { LazyExoticComponent } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAppRoutes {
  key: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
}
export interface INavRoutes {
  key: string;
  path: string;
}
export interface ISidebar {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IProduct {
  id: number | string;
  name: string;
  price: number;
  types: string[];
  postedAt: string;
  isActive: boolean;
  img: string;
  address: string;
}
export interface IUser {
  name: string;
  email: string;
  password?: string;
  postedAd?: string[];
  address?: string;
  likedAds?: string[];
}
