import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const Authprovider = (props) => {
  const { children } = props; //chilren are components which are wrapped around this AuthProvider component
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
