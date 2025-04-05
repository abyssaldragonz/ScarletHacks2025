import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

export default function Signup() {
  return (
    <SafeAreaView style={styles.landing}>
        <Link href="/" style={styles.link}>
            Go to Index screen
        </Link>

        <View style={styles.loginBox}>
            <Text style={{fontSize: 30, fontWeight: 800, textAlign: 'center', marginTop: 60, marginBottom: 10}}>Sign Up</Text>
            <TextInput style={styles.usernameBox} placeholder = "Username" placeholderTextColor={"#3B2828"} />
            <TextInput style={styles.passwordBox} secureTextEntry={true} placeholder = "Password" placeholderTextColor={"#3B2828"} />
            <TextInput style={styles.passwordBox} secureTextEntry={true} placeholder = "Re-enter Password" placeholderTextColor={"#3B2828"} />
            <Text style={styles.loginButton}>Create Account</Text>
        </View>
        <Text>HELLO WORLD!TEST3</Text>
    </SafeAreaView>
  );
}