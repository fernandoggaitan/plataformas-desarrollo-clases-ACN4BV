import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {

    const [logueado, setLogueado] = useState(false);
    const [token, setToken] = useState(null);

    const login = (accessToken) => {
        setLogueado(true);
        setToken(accessToken);
    }

    const logout = () => {
        setLogueado(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={ {logueado, login, logout, token} }>
            { children }
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}