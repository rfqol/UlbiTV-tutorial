import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";
import { AuthContext } from "./context";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <Navigation />
      <AppRouter />
    </AuthContext.Provider>
  );
}
