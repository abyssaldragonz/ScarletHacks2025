import React, {useContext} from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, TextInput } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

import { AuthContext } from './AuthContext';

interface AccountProfile {
    username: string
}

export default function Login() {
  // signIn = useContext(AuthContext);
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
              {/* <Button title="Log In" color = 'black' onPress={() => {signIn()}}/> */}
            </View>
            
            <Link style={{color: '#3B2828'}} href="/signup">Create Account</Link>
        </View>


    </SafeAreaView>
  );
}