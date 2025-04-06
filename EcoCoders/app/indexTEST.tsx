import React, {useEffect} from 'react';
import { Text, SafeAreaView } from "react-native";
import { Link, useRouter } from 'expo-router';
import styles from './Style.js';

export default function Index() {
	const router = useRouter();
	useEffect(() => {
		const timeout = setTimeout(() => {
			router.replace('/');
		}, 50); // slight delay ensures layout is ready

		return () => clearTimeout(timeout);
	}, []);
	return (
		<SafeAreaView style={styles.landing}>
			<Text>WE ARE IN INDEX.TSX</Text>
			<Link href="/home" style={styles.link}>
				Go to Home screen
			</Link>

			<Link href="/" style={styles.link}>
				Go to Login screen
			</Link>

			<Text>Edit app/index.tsx to edit this screen.</Text>
			<Text>HELLO WORLD!</Text>
		</SafeAreaView>
	);
}
