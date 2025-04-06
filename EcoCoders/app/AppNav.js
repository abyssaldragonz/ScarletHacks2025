import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Im pretty sure AppStack is just what should display once theyre in
//and Appstack is whats shown if they ARENT.
// import AuthStack from './AuthStack';
// import AppStack from './AppStack';
import {AuthContext} from './AuthContext.js';

function AppNav() {
    const {isLoading, userToken} = useContext(AuthContext);

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {/* {userToken ? <AppStack /> : <AuthStack />} */}
        </NavigationContainer>
    );
}

export default AppNav;