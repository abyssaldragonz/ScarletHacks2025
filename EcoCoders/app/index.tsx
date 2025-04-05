import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

export default function Index() {
	return (
		<SafeAreaView style={styles.layout}>
			<Link href="/home" style={styles.link}>
				Go to Home screen
			</Link>

			<Link href="/login" style={styles.link}>
				Go to Login screen
			</Link>

			<Text>Edit app/index.tsx to edit this screen.</Text>
			<Text>HELLO WORLD!</Text>
		</SafeAreaView>
	);
}
