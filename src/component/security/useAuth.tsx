import React, { ReactNode, useContext } from "react";
import { postRequest } from "../common/FetchApi";

interface AuthContextProps {
  user: {
    fullName: string,
    userName: string,
    token: string,
    profileImage: string,
    expiryToken: string,
    isAuthenticated: boolean,
  };
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps | null>(null);
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<any | null>(null);

  const login = async (user: any) => {
    let path = "/login";
    let result = await postRequest(path, user);
    setUser(result);
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
  return useContext(AuthContext)
}