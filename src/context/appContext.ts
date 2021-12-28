import { useContext, createContext } from "react";
import {User} from "./interfaces";

export type AppContent = {
  isLoggedIn: boolean;
  user: User
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser : (u:User ) => void;
};

export const AppContext = createContext<AppContent>({
  isLoggedIn: false,
  user: {
    id: 0,
    name: "",
    email: "",
    role: "",
  },
  setIsLoggedIn: () => {},
  setUser:() =>{},
});
export const useApp = () => useContext(AppContext);
