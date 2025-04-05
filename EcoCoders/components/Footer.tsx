import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { Link, Stack } from 'expo-router';
import * as Linking from 'expo-linking';

import styles from './GlobalStyle.js';


export default function Footer() {
  return (
    <SafeAreaView style={styles.footer}>
        <View>
            <Link href="/">HOME</Link>
        </View>
        
        <View style={styles.buddy}>
            <Link href="/">BUDDY</Link>
        </View>

        <View>
            <Link href="/">PROFILE</Link>
        </View>
    </SafeAreaView>
  );
}
