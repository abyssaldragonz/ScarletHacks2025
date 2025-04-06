import React, {useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from './BoxStyle.js';

import { TaskObject } from '../app/home.js';
import CheckmarkIcon from '../assets/images/checkmarkIcon';
import ClockIcon from '../assets/images/clockIcon';

export default function TaskBox(props:{task:TaskObject}) {
    const [taskOpened, setCount] = useState(-1);
    const openPopup = () => setCount(taskOpened => taskOpened * -1);

    return (
        <TouchableOpacity onPress={openPopup}> {/* Every time we press on the task, it expands it */}
            <SafeAreaView style={styles.layout} id={props.task.name}>
                <View style={styles.compactLayout}>
                    <View style={styles.textCol}>
                        <Text style={styles.header}>{props.task.name}</Text>
                        <Text style={styles.subheader}>{props.task.points} EXP</Text>
                    </View>

                    {/* Finished task */}
                    {props.task.done && (
                        <View style={{borderRadius: 75/2, width: 75, height: 75, backgroundColor: '#9BB218'}}>
                            <CheckmarkIcon />
                        </View>
                    )}

                    {/* Unfinished task */}
                    {!props.task.done && (
                        <View style={{borderRadius: 75/2, width: 75, height: 75, backgroundColor: '#E5BB48'}}>
                            <ClockIcon />
                        </View>
                    )}
                </View>

                {/* Open the task when the state is set to one */}
                {(taskOpened == 1) &&
                    <Text>
                        {props.task.description}
                    </Text>
                }
            </SafeAreaView>
        </TouchableOpacity>
    );
}
