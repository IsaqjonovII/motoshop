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
export interface IUser {
  _id: string;
  phone: string;
  name: string;
  email?: string;
  postedAds?: string[];
  viewedAds?: string[];
  address?: string;
  likedAds?: string[];
  feedback?: string[];
  chatHistory?: string[];
  savedSearches: string[];
}
export interface IBackendResponse {
  message: string;
  user?: IUser;
  data?: {
    message: string;
  };
}
export interface IServerError {
  status: string;
  error: string;
  data?: {
    message: string;
  };
}
