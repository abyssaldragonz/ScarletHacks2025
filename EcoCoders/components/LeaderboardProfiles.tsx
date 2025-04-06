import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import { Image } from 'expo-image';
import styles from './BoxStyle.js';

import { ProfileObject } from '../app/profile.js';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function LeaderboardProfile(props:{person:ProfileObject}) {
    return (
        <SafeAreaView style={[styles.layout, {padding: 20}]}>
            <View style={[styles.compactLayout, {justifyContent: "flex-start", gap: 10}]}>
                {/* Rank */}
                <Text style={{fontSize: 10, fontWeight: 900}}>{props.person.rank}</Text>

                {/* Image */}
                <Image
                    style={{height: 55, width: 55, borderRadius: 55/2}}
                    source={require("../assets/images/buddy/scrimblo.gif")}
                    placeholder={{ blurhash }}
                    contentFit="contain"
                    transition={1000}
                    alt="Scrimblo"
                />

                {/* User Information */}
                <View style={styles.textCol}>
                    <Text style={[styles.header, {fontSize: 15}]}>{props.person.name}</Text>
                    <Text style={styles.subheader}>@{props.person.tag}</Text>
                </View>

                <View style={{flex: 1, marginRight: 0, width: 20}}>
                    <Text style={{textAlign: 'right'}}>{props.person.exp}{"\n"} EXP</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}
