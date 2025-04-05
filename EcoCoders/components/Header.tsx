import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { Link, Stack } from 'expo-router';
import * as Linking from 'expo-linking';

import styles from './GlobalStyle.js';


export default function Header() {
  return (
    <SafeAreaView style={styles.layout}>
        <View>
            <Link href="http://maps.google.com/">LOCATION</Link>
        </View>
        <Text style={{fontSize: 30, fontWeight: 900, textAlign: 'center', color: '#D9D9D9'}}>Home</Text>
        <View>
            <Link href="http://maps.google.com/">SETTINGS</Link>
        </View>
    </SafeAreaView>
  );
}
