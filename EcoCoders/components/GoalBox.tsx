import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from './BoxStyle.js';

import { GoalObject } from '../app/home.js';

export default function GoalBox(props:{goal:GoalObject}) {
    const [taskOpened, setCount] = useState(-1);
    const openPopup = () => setCount(taskOpened => taskOpened * -1);

    return (
        <TouchableOpacity onPress={openPopup}>{/* Every time we press on the task, it expands it */}
            <SafeAreaView style={styles.layout}>
                <View style={styles.textRow}>
                    <Text style={styles.header}>{props.goal.name}</Text>
                    <Text style={styles.subheader}>{props.goal.percent}% there!</Text>                
                </View>

                {/* Open the task when the state is set to one */}
                {(taskOpened == 1) &&
                    <Text style={{alignSelf: 'flex-start'}}>
                        {props.goal.description}
                    </Text>
                }
                
                {/* Change progress bar completion */}
                <View style={styles.progressBar}>
                    <View style={[styles.completedBar, {width: `${(props).goal.percent}%`}]}></View>
                </View>

                <Text style={{color: '#3B2828', fontSize: 15, fontWeight: 500}}>{props.goal.points} EXP per % done</Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
}
