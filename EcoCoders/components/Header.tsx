import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import { Link } from 'expo-router';

import LocationIcon from '../assets/images/locationIcon';
import SettingIcon from '../assets/images/settingIcon';

import styles from './GlobalStyle.js';


export default function Header( headerTitle:{name:string} ) {
  return (
    <SafeAreaView style={styles.layout}>
        <View>
            <Link href="http://maps.google.com/" target={"_blank"}>
                <LocationIcon />
            </Link>
        </View>
        <Text style={{fontSize: 30, fontWeight: 900, textAlign: 'center', color: '#D9D9D9'}}>{headerTitle.name}</Text>
        <View>
            <Link href="/profile">
                <SettingIcon />
            </Link>
        </View>
    </SafeAreaView>
  );
}
