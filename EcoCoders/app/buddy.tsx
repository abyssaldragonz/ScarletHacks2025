import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

import Header from '../components/Header';
import Footer from '../components/Footer';

interface BuddyProfile {
    name: string,
    species: string,
    level: number,
    exp: number,
}

export default function Buddy(bud:BuddyProfile) {
    return (
        <SafeAreaView style={styles.layout}>
            <Header name={"BioBuddy"}/>
            <ScrollView>
                <Text>WE ARE IN BUDDY.TSX</Text>
                <Text style={styles.header}>{bud.name}HI</Text>
                <Text style={styles.subheader}>{bud.species}HI</Text>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}
