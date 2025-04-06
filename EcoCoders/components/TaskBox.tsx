import React, {useContext, useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from './BoxStyle.js';

import { TaskObject } from '../app/home.js';
import CheckmarkIcon from '../assets/images/checkmarkIcon';
import ClockIcon from '../assets/images/clockIcon';

import { AuthContext } from '../app/AuthContext';


export default function TaskBox(props:{task:TaskObject}) {
    const [taskOpened, setOpened] = useState(false);
    const openPopup = () => setOpened(prev => !prev);

    const { taskCompletion, setTaskCompletion, markTaskDone } = useContext(AuthContext);
    const taskName = props.task.name;
    const isDone = taskCompletion?.[taskName] ?? false;

    const toggleTaskCompletion = () => {
        markTaskDone(taskName, !isDone);
    }

    return (
        <TouchableOpacity onPress={openPopup}>{/* Every time we press on the task, it expands it */}
            <SafeAreaView style={styles.layout} id={props.task.name}>
                <View style={styles.compactLayout}>
                    <View style={styles.textCol}>
                        <Text style={[styles.header, {flexWrap: 'wrap'}]}>{props.task.name}</Text>
                        <Text style={styles.subheader}>{props.task.points} EXP</Text>
                    </View>

                    {/* Task status */}
                    <TouchableOpacity onPress={toggleTaskCompletion}>
                        <View style={{
                            borderRadius: 75 / 2,
                            width: 75,
                            height: 75,
                            backgroundColor: isDone ? '#9BB218' : '#E5BB48'
                        }}>
                            {isDone ? <CheckmarkIcon /> : <ClockIcon />}
                        </View>
                    </TouchableOpacity>
                </View>

                {taskOpened && (
                    <Text style={{ padding: 10 }}>{props.task.description}</Text>
                )}
            </SafeAreaView>
        </TouchableOpacity>
    );
}
