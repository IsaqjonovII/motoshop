export interface IAppRoutes {
    key: string;
    path: string;
    Component: React.ReactNode | JSX.Element;
}
export interface INavRoutes {
    key: string;
    path: string;
}
export interface ISidebar {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}