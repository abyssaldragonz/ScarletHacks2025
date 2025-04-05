import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView} from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

import Header from '../components/Header';
import TaskBox from '../components/TaskBox';
import Footer from '../components/Footer';

export interface TaskObject {
    name: string,
    points: number,
    done: boolean
    
};


const exampleTask : TaskObject = {
    name: "TASK ONE",
    points: 25,
    done: true
}

const exampleTask2 : TaskObject = {
    name: "TASK TWO",
    points: 15,
    done: false
}

export default function Home() {
  return (
    <SafeAreaView style={styles.layout}>
        <Header />
        <ScrollView>
            <Text style={styles.header}>Tasks</Text>

            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask2}></TaskBox>

            <Link href="/" style={styles.link}>
                Go to Index screen
            </Link>

            <Link href="/login" style={styles.link}>
                Go to Login screen
            </Link>
            
        </ScrollView>
        <Footer />
    </SafeAreaView>
  );
}
