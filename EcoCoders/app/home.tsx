import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView} from "react-native";
import styles from './Style.js';

import Header from '../components/Header';
import TaskBox from '../components/TaskBox';
import GoalBox from '../components/GoalBox';
import Footer from '../components/Footer';

import taskObjects from '../assets/taskObjects.json';

export interface TaskObject {
    id: number,
    name: string,
    points: number,
    description: string,
    done: boolean
};

export interface GoalObject {
    id: number,
    name: string,
    points: number,
    description: string,
    percent: number
};


export default function Home() {
  return (
    <SafeAreaView style={styles.layout}>
        <Header name={"Home"} />
        <ScrollView style={{paddingLeft: 25}}>
            <Text style={styles.header}>Tasks</Text>

            {taskObjects.tasks.map((data, index) => (
                <TaskBox key={index} task={data}></TaskBox>
            ))}

            <View style={{padding: 25}} />
            <Text style={styles.header}>Community Goals</Text>

            {taskObjects.goals.map((data, index) => (
                <GoalBox key={index} goal={data}></GoalBox>
            ))}

        </ScrollView>
        <Footer />
    </SafeAreaView>
  );
}
