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
  _id: string;
  phone: string | number;
  name: string;
  email?: string;
  password: string;
  postedAds?: string[];
  viewedAds?: string[];
  address?: string;
  likedAds?: string[];
  feedback?: string[];
  chatHistory?: string[];
  savedSearches: string[];
}
export interface IBackendResponse {
  data: {
    msg: string;
  };
  user?: IUser;
  msg?: string;
  error?: {
    status?: string;
    error?: string;
  };
}
