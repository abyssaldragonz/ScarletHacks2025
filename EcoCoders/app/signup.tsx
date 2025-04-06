import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Alert, Pressable } from "react-native";
import { Link, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style.js';

interface RegisteredUser {
  username: string;
  password: string;
}

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    if (!username.trim() || !password || !confirmPassword) {
      Alert.alert('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.');
      return;
    }

    try {
      const existingUsers = await AsyncStorage.getItem('registeredUsers');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      if (users.find((user: RegisteredUser) => user.username === username)) {
        Alert.alert('Username is already taken.');
        return;
      }      

      users.push({ username, password });
      await AsyncStorage.setItem('registeredUsers', JSON.stringify(users));

      Alert.alert('Account created! You can now log in.');
      router.replace('/login');
    } catch (e) {
      console.error('Signup error:', e);
      Alert.alert('Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.landing}>
      <Link href="/" style={styles.link}>
        Go to Index screen
      </Link>

      <View style={styles.loginBox}>
        <Text style={{ fontSize: 30, fontWeight: 800, textAlign: 'center', marginTop: 60, marginBottom: 10 }}>
          Sign Up
        </Text>

        <TextInput
          style={styles.usernameBox}
          placeholder="Username"
          placeholderTextColor={"#3B2828"}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.passwordBox}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={"#3B2828"}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.passwordBox}
          secureTextEntry
          placeholder="Re-enter Password"
          placeholderTextColor={"#3B2828"}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Pressable style={styles.loginButton} onPress={handleSignup}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Create Account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
