import React, { useContext, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView } from "react-native";
import { Link, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import styles from './Style.js';

import Header from '../components/Header';
import LeaderboardProfile from '../components/LeaderboardProfiles';
import Footer from '../components/Footer';

//login/profile stuff
import { AuthContext } from './AuthContext';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export interface ProfileObject {
    name: string,
    exp: number,
    tag: string,
    rank: number
};

const abyssaldragonz : ProfileObject = {
    name: "Josephine Lee",
    exp: 2150,
    tag: "abyssaldragonz",
    rank: 1
}

const saxelsson : ProfileObject = {
    name: "Sagha Axelsson",
    exp: 1200,
    tag: "saxelsson",
    rank: 2
}

const toppi : ProfileObject = {
    name: "Christopher Harrison",
    exp: 1000,
    tag: "ToppiTheThinker",
    rank: 3
}

export default function Profile() {
const { userProfile, logout, userToken } = useContext(AuthContext);

const router = useRouter();
useEffect(() => {
    if (!userToken)
      router.replace('./login');
  }, [userToken]);

    return (
        <SafeAreaView style={styles.layout}>
            <Header name={userProfile?.username ?? "My Profile"} />
            <ScrollView style={{paddingLeft: 25}}>
                {/* Top Portion */}
                <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-around', gap: 25}}>
                    <Image
                        style={styles.userImage}
                        // source={require("/")}
                        source = {{blurhash}}
                        placeholder={{ blurhash }}
                        contentFit="contain"
                        transition={1000}
                        alt="User Profile"
                    />

                    {/* Information */}
                    <View style={styles.profileHeader}>
                        <Text style={styles.header}>{userProfile?.username ?? "Display Name"}</Text>
                        <Text style={styles.subheader}>@{userProfile?.username ?? "username"}</Text>
                        <Text style={styles.subheader}># Friends</Text>
                        <Text style={{textAlign: 'center', width: '100%', fontSize: 15, fontWeight: 700, backgroundColor: '#D9D9D9', borderRadius: 7, marginTop: 5, paddingTop: 10, paddingBottom: 10}}>Edit Profile</Text>
                        <View style={styles.loginButton}>
                            <Button title="Sign Out" color = 'black' onPress={() => {logout()}}/>
                        </View>
                    </View>
                </View>

                {/* Recent Contributions */}
                <View style={{padding: 20}}></View>
                <Text style={styles.header}>Recent Contributions</Text>
                <View style={styles.buddyBonusContainer}>


                </View>

                {/* Leaderboard */}
                <View style={{padding: 20}}></View>
                <Text style={styles.header}>Leaderboard</Text>
                <View style={styles.leaderboard}>
                    <LeaderboardProfile person={abyssaldragonz}></LeaderboardProfile>
                    <LeaderboardProfile person={saxelsson}></LeaderboardProfile>
                    <LeaderboardProfile person={toppi}></LeaderboardProfile>
                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}
