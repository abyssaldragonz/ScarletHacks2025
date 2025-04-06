import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView} from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './Style.js';

import Header from '../components/Header';
import TaskBox from '../components/TaskBox';
import GoalBox from '../components/GoalBox';
import Footer from '../components/Footer';

export interface TaskObject {
    name: string,
    points: number,
    description: string,
    done: boolean
    
};

export interface GoalObject {
    name: string,
    points: number,
    description: string,
    percent: number
};


const exampleTask : TaskObject = {
    name: "TASK ONE",
    points: 25,
    description: "some placeholder description for task one",
    done: true
}

const exampleTask2 : TaskObject = {
    name: "TASK TWO",
    points: 15,
    description: "some other description for task two",
    done: false
}

const exampleGoal : GoalObject = {
    name: "community goal woah",
    points: 5,
    description: "aaaaaa",
    percent: 15
}

export default function Home() {
  return (
    <SafeAreaView style={styles.layout}>
        <Header name={"Home"} />
        <ScrollView>
            <Text style={styles.header}>Tasks</Text>

            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask}></TaskBox>
            <TaskBox task={exampleTask2}></TaskBox>


            <Text style={styles.header}>Community Goals</Text>

            <GoalBox goal={exampleGoal}></GoalBox>

        </ScrollView>
        <Footer />
    </SafeAreaView>
  );
}
