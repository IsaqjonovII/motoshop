export interface IAppRoutes {
  key: string;
  path: string;
  Component: React.ReactNode | JSX.Element | any;
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
  price: number | string;
  types: string[];
  postedAt: string;
  isActive: boolean;
  img: string;
  address: string;
}