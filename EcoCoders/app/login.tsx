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
            <Text style={{fontSize: 20, fontWeight: 800, textAlign: 'center'}}>LOGIN PAGE</Text>
            <TextInput style={styles.userNameBox} placeholder = "Username" placeholderTextColor={"#3B2828"} />
            <TextInput style={styles.userNameBox} placeholder = "Password" placeholderTextColor={"#3B2828"} />
        </View>
        <Text>HELLO WORLD!TEST3</Text>
    </SafeAreaView>
  );
}