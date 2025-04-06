import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Link, Stack } from 'expo-router';
import styles from './TaskBoxStyle.js';

import { TaskObject } from '../app/home.js';
import CheckmarkIcon from '../assets/images/checkmarkIcon';
import ClockIcon from '../assets/images/clockIcon';

export default function TaskBox(props:{task:TaskObject}) {
    const taskOpened : boolean = false;
    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.compactLayout}>
                <View style={styles.textCol}>
                    <Text style={{color: '#3B2828', fontSize: 20, fontWeight: 700}}>{props.task.name}</Text>
                    <Text style={{color: '#3B2828', fontSize: 15, fontWeight: 500}}>{props.task.points} EXP</Text>
                </View>
                {props.task.done && (
                    <View style={{borderRadius: 75/2, width: 75, height: 75, backgroundColor: '#9BB218'}}>
                        <CheckmarkIcon />
                    </View>
                )}

                {!props.task.done && (
                    <View style={{borderRadius: 75/2, width: 75, height: 75, backgroundColor: '#E5BB48'}}>
                        <ClockIcon />
                    </View>
                )}
            </View>

            {taskOpened &&
                <Text>
                    {props.task.description}
                </Text>
            }
        </SafeAreaView>
    );
}
