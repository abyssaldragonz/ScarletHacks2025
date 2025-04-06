import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import { Link, Stack } from 'expo-router';

import HomeIcon from '../assets/images/homeIcon';
import EcoPetIcon from '../assets/images/ecopet';
import ProfileIcon from '../assets/images/profileIcon';

import styles from './GlobalStyle.js';


export default function Footer() {
  return (
    <SafeAreaView style={styles.footer}>
        <View>
            <Link href="/home">
                <HomeIcon />
            </Link>
        </View>
        
        <View style={styles.buddy}>
            <Link href="/buddy" style={{width: 100, height: 100}}>
                <EcoPetIcon />
            </Link>
        </View>

        <View>
            <Link href="/profile">
                <ProfileIcon />
            </Link>
        </View>
    </SafeAreaView>
  );
}
