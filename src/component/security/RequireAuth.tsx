import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import React, { ReactNode } from "react";

export const RequireAuth: React.FC<{ children: ReactNode }> = ({ children }) => {
    const auth = useAuth();
    if(auth?.user == null || auth?.user == undefined)
    {
        return <Navigate to='/signin' />;
    }
    else if (!auth?.user.isAuthenticated) {
        return <Navigate to='/signin' />;
    }

    return <>{children}</>; 
};
