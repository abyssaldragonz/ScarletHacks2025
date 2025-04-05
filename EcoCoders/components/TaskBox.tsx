import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './TaskBoxStyle.js';

import { TaskObject } from '../app/home.js';

export default function TaskBox(props:{task:TaskObject}) {
  return (
    <SafeAreaView style={styles.layout}>
        <Text>{props.task.name}</Text>
    </SafeAreaView>
  );
}
