import React, {createContext, useEffect} from 'react';
export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    const [userProfile, setUserProfile] = React.useState(null);
    
    const signIn = async() => {
        const fakeToken = 'dummy-auth-token';
        const fakeUser = { username: 'john_doe' };
        try {
            await AsyncStorage.setItem('userToken', fakeToken);
            await AsyncStorage.setItem('userProfile', JSON.stringify(fakeUser));
            setUserToken(fakeToken);
            setUserProfile(fakeUser);
          } catch (e) {
            console.error('Failed to save login data', e);
          }
      
          setIsLoading(false);
        };
    
        const logout = async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              await AsyncStorage.removeItem('userProfile');
              setUserToken(null);
              setUserProfile(null);
            } catch (e) {
              console.error('Failed to remove login data', e);
            }
        
            setIsLoading(false);
          };
        
          const checkLoginStatus = async () => {
            try {
              const storedToken = await AsyncStorage.getItem('userToken');
              const storedProfile = await AsyncStorage.getItem('userProfile');
        
              if (storedToken && storedProfile) {
                setUserToken(storedToken);
                setUserProfile(JSON.parse(storedProfile));
              }
            } catch (e) {
              console.error('Error retrieving user data', e);
            }
        
            setIsLoading(false);
          };
    
          useEffect(() => {
            checkLoginStatus();
          }, []);

    return (
        <AuthContext.Provider value={{signIn, logout, isLoading, userToken, userProfile}}>
        {children}
        </AuthContext.Provider>
    );

}