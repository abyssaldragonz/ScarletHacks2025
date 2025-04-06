import React, {createContext, useEffect} from 'react';
export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    const [userProfile, setUserProfile] = React.useState(null);
    
    const signIn = async (username, password) => {
        try {
          const registeredUsers = await AsyncStorage.getItem('registeredUsers');
          const users = registeredUsers ? JSON.parse(registeredUsers) : [];
      
          const existingUser = users.find(user => user.username === username);
      
          if (!existingUser) {
            alert('User not found. Please sign up first.');
            return;
          }
      
          console.log(existingUser.password, password)
          if (existingUser.password !== password) {
            alert('Incorrect password.');
            return;
          }
      
          const fakeToken = 'dummy-auth-token';
          const userProfile = { username };
      
          await AsyncStorage.setItem('userToken', fakeToken);
          await AsyncStorage.setItem('userProfile', JSON.stringify(userProfile));
      
          setUserToken(fakeToken);
          setUserProfile(userProfile);
        } catch (e) {
          console.error('Login error', e);
          alert('Something went wrong. Try again.');
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