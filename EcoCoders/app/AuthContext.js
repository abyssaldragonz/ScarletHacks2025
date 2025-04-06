import React, {createContext} from 'react';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    
    const signIn = () => {
        setUserToken('dummy-auth-token');
        setIsLoading(false);
    };
    
    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
    };
    
    return (
        <AuthContext.Provider value={{signIn, logout, isLoading, userToken}}>
        {children}
        </AuthContext.Provider>
    );

}