import React, {useContext, useEffect} from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, TextInput } from "react-native";
import { Link, useRouter } from 'expo-router';
import styles from './Style.js';

import { AuthContext } from './AuthContext';

interface AccountProfile {
    username: string
}

export default function Login() {
  const {signIn, userToken} = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (userToken) // we can do token logic here(see if its already taken)
      router.replace('/home'); // Redirect if already logged in
  }, [userToken]);

  return (
    <SafeAreaView style={styles.landing}>
        <Link href="/" style={styles.link}>
            Go to Index screen
        </Link>

        <View style={styles.loginBox}>
            <Text style={{color:'#3B2828', fontSize: 30, fontWeight: 800, textAlign: 'center', marginTop: 60, marginBottom: 10}}>Log In</Text>
            <TextInput style={styles.usernameBox} placeholder = "Username" placeholderTextColor={"#3B2828"} />
            <TextInput style={styles.passwordBox} secureTextEntry={true} placeholder = "Password" placeholderTextColor={"#3B2828"} />
            <View style={styles.loginButton}>
              <Button title="Log In" color = 'black' onPress={() => {signIn()}}/>
            </View>
            
            <Link style={{color: '#3B2828'}} href="/signup">Create Account</Link>
        </View>


    </SafeAreaView>
  );
}