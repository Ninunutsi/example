import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const filled = () => {
    setAuth(true);
  };

  return (
    <AuthContext.Provider value={{ auth, filled }}>
      {children}
    </AuthContext.Provider>
  );
};
