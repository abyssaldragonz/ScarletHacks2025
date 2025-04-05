import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './TaskBoxStyle.js';

import { TaskObject } from '../app/home.js';

export default function TaskBox(props:{task:TaskObject}) {
  return (
    <SafeAreaView style={styles.layout}>
        <View style={styles.textCol}>
            <Text style={{color: '#3B2828', fontSize: 20, fontWeight: 700}}>{props.task.name}</Text>
            <Text style={{color: '#3B2828', fontSize: 15, fontWeight: 500}}>{props.task.points} EXP</Text>
        </View>
        {props.task.done && (
            <View style={{borderRadius: 75/2, width: 75, height: 75, backgroundColor: '#B5C26B'}} />
        )}

        {!props.task.done && (
            <View style={{borderRadius: 75/2, width: 75, height: 75, backgroundColor: '#D1B566'}} />
        )}
    </SafeAreaView>
  );
}
