import { useContext, createContext } from "react";
import { Student, User } from "./interfaces";

export type AppContent = {
  isLoggedIn: boolean;
  user: User | Student;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (u: User | Student) => void;
};

export const AppContext = createContext<AppContent>({
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    matricule: "",
    role: "",
    status: "",
    semester: 0,
    career:""
  },
  setIsLoggedIn: () => {},
  setUser: () => {},
});
export const useApp = () => useContext(AppContext);
