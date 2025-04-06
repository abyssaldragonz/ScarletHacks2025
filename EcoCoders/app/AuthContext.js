import React, {createContext, useEffect} from 'react';
export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    const [userProfile, setUserProfile] = React.useState(null);
    const [showNameInput, setShowNameInput] = React.useState(null);
    const [taskCompletion, setTaskCompletion] = React.useState({});

    
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
          const userProfile = {
            username: existingUser.username,
            name: existingUser.name || existingUser.username // fallback
          };
      
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

        const setName = async (newName) => {
          try {
            const updatedProfile = { ...userProfile, name: newName };
            setUserProfile(updatedProfile);
            await AsyncStorage.setItem('userProfile', JSON.stringify(updatedProfile));
          } catch (e) {
            console.error("Failed to update name", e);
          }
        };

        const markTaskDone = async (taskName, done) => {
          try {
            const updated = { ...taskCompletion, [taskName]: done };
            setTaskCompletion(updated);
            await AsyncStorage.setItem('taskCompletion', JSON.stringify(updated));
          } catch (e) {
            console.error("Failed to save task completion", e);
          }
        };
        
        const loadTaskCompletion = async () => {
          try {
            const data = await AsyncStorage.getItem('taskCompletion');
            if (data) {
              setTaskCompletion(JSON.parse(data));
            }
          } catch (e) {
            console.error("Failed to load task completion", e);
          }
        };

        useEffect(() => {
          checkLoginStatus();
          loadTaskCompletion();
        }, []);
        

    return (
        <AuthContext.Provider value={{signIn, logout, isLoading, userToken, userProfile, showNameInput, setName, taskCompletion, markTaskDone, setShowNameInput}}>
        {children}
        </AuthContext.Provider>
    );

}