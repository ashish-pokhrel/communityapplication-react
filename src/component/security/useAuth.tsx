import React, { ReactNode, useContext, useEffect } from "react";
import { postRequest } from "../common/FetchApi";

interface AuthContextProps {
  user: {
    fullName: string;
    userName: string;
    token: string;
    profileImage: string;
    expiryToken: string;
    isAuthenticated: boolean;
  };
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<any | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (user: any) => {
    let path = "/login";
    let result = await postRequest(path, user);
    setUser(result);
    localStorage.setItem("user", JSON.stringify(result));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!user && storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Check token expiration
    if (user && user.expiryToken) {
      const expirationTime = new Date(user.expiryToken).getTime();
      const currentTime = new Date().getTime();

      if (currentTime > expirationTime) {
        logout();
      }
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
