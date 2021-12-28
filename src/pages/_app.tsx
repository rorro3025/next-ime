import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { AppContext } from "../context/appContext";
import { User } from "../context/interfaces";
import { auth } from "../fsconfig";

function MyApp({ Component, pageProps }: AppProps) {
  const current = auth.currentUser;
const session = false;
    const initialState = {
      id: 0,
      name: "",
      email: "",
      role: "Professor",
    };
  if (current) {
    const session = true;
    const initialState = {
        id: current.uid,
        name: current.displayName,
        email: current.email,
        role: "student",
    };
  } 
  const [isLoggedIn, setIsLoggedIn] = useState(session);
  const [user, setUser] = useState<User>(initialState);
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
