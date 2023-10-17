import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { checkAuthUser } from "src/store/auth/authSlice";

interface AuthContextProviderProps {
    children: ReactNode,
}

export interface AuthContextProps {
    isAuthenticated: boolean;
    setAuth: (auth: boolean) => void;
}

const DefaultAuthContextProps: AuthContextProps = {
    isAuthenticated: false,
    setAuth: () => { }
}

export const AuthContext = createContext<AuthContextProps>(DefaultAuthContextProps);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [isAuthenticated, setAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}   