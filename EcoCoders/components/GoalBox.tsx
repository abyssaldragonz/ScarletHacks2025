import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './BoxStyle.js';

import { GoalObject } from '../app/home.js';

export default function GoalBox(props:{goal:GoalObject}) {
    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.textRow}>
                <Text style={styles.header}>{props.goal.name}</Text>
                <Text style={styles.subheader}>{props.goal.percent}% there!</Text>                
            </View>
            
            <View style={styles.progressBar}>
                <View style={styles.completedBar}></View>
            </View>

            <Text style={{color: '#3B2828', fontSize: 15, fontWeight: 500}}>{props.goal.points} EXP per % done</Text>
        </SafeAreaView>
    );
}
