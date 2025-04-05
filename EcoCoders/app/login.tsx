import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

export default function Login() {
  return (
    <SafeAreaView style={styles.landing}>
        <Link href="/" style={styles.link}>
            Go to Index screen
        </Link>

        <View style={styles.loginBox}>
            <Text style={{color:'#3B2828', fontSize: 30, fontWeight: 800, textAlign: 'center', marginTop: 60, marginBottom: 10}}>Log In</Text>
            <TextInput style={styles.usernameBox} placeholder = "Username" placeholderTextColor={"#3B2828"} />
            <TextInput style={styles.passwordBox} secureTextEntry={true} placeholder = "Password" placeholderTextColor={"#3B2828"} />
            <Text style={styles.loginButton}>Log In</Text>
            <Link style={{color: '#3B2828'}} href="/signup">Create Account</Link>
        </View>
    </SafeAreaView>
  );
}