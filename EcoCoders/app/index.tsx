import React, {useContext, useEffect} from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, TextInput } from "react-native";
import { Link, useRouter } from 'expo-router';
import styles from './Style.js';

import { AuthContext } from './AuthContext.js';

interface AccountProfile {
    username: string
}

export default function Login() {
  const {signIn, userToken, userProfile} = useContext(AuthContext);
  const router = useRouter();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //check if user is logged in if so, redirect to home page
  useEffect(() => {
    if (userToken)
      router.replace('/home');
  }, [userToken]);

  return (
    <SafeAreaView style={styles.landing}>
        <View style={styles.loginBox}>
            <Text style={{color:'#3B2828', fontSize: 30, fontWeight: 800, textAlign: 'center', }}>Log In</Text>
            <TextInput style={styles.usernameBox} placeholder = "Username" value={username} onChangeText={setUsername} placeholderTextColor={"#3B2828"} />
            <TextInput style={styles.passwordBox} secureTextEntry={true} placeholder = "Password" value={password} onChangeText={setPassword} placeholderTextColor={"#3B2828"} />
            <View style={styles.loginButton}>
              <Button title="Log In" color = 'black' onPress={() => {signIn(username, password)}}/>
            </View>
            
            <Link style={{color: '#3B2828'}} href="/signup">Create Account</Link>
        </View>


    </SafeAreaView>
  );
}