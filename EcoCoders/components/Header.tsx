import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { Link, Stack } from 'expo-router';
import * as Linking from 'expo-linking';

import styles from './GlobalStyle.js';


export default function Header() {
  return (
    <SafeAreaView style={styles.layout}>
        <Button title="Location" onPress={() => Linking.openURL('http://maps.google.com/')} />
        <Text style={{fontSize: 30, fontWeight: 900, textAlign: 'center', color: '#D9D9D9'}}>Home</Text>
        <Button title="Settings" onPress={() => Linking.openURL('http://maps.google.com/')} />
    </SafeAreaView>
  );
}
