import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
    return (
        <SafeAreaView style={styles.layout}>
            <Header name={"My Profile"} />
            <ScrollView>
                <Text>WE ARE IN PROFILE.TSX</Text>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}
