import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

import Header from '../components/Header';
import TaskBox from '../components/TaskBox';

export interface TaskObject {
    name: string;
};


const exampleTask : TaskObject = {
    name: "TASK ONE"
}

const exampleTask2 : TaskObject = {
    name: "TASK TWO"
}

export default function Home() {
  return (
    <SafeAreaView style={styles.layout}>
        <Header />
        <Text style={styles.header}>Tasks</Text>

        <TaskBox task={exampleTask}></TaskBox>
        <TaskBox task={exampleTask2}></TaskBox>

        <Link href="/" style={styles.link}>
            Go to Index screen
        </Link>

        <Link href="/login" style={styles.link}>
            Go to Login screen
        </Link>
        
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text>HELLO WORLD!TEST2</Text>
    </SafeAreaView>
  );
}
