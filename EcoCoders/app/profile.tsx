import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, TextInput } from "react-native";
import { Link, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import styles from './Style.js';

import Header from '../components/Header';
import LeaderboardProfile from '../components/LeaderboardProfiles';
import Footer from '../components/Footer';

//login/profile stuff
import { AuthContext } from './AuthContext';

const blurhash = require("../assets/images/buddy/clear.webp");

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
const { userProfile, logout, userToken, setName } = useContext(AuthContext);
const [newName, setNewName] = useState(userProfile?.name ?? "");
const [showNameInput, setShowNameInput] = useState(false);

const router = useRouter();
useEffect(() => {
    if (!userToken)
      router.replace('/');
    }, [userToken]);

function changeName()
{
    if (showNameInput && newName.trim() !== "") {
        setName(newName); // update only the display name
      }
      setShowNameInput(!showNameInput);
}

    return (
        <SafeAreaView style={styles.layout}>
            <Header name={userProfile?.username ?? "My Profile"} />
            <ScrollView style={{paddingLeft: 25}}>
                {/* Top Portion */}
                <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-around', gap: 25}}>
                    <Image
                        style={styles.userImage}
                        source = {require("../assets/images/sprout.webp")}
                        placeholder={blurhash}
                        contentFit="contain"
                        transition={1000}
                        alt="User Profile"
                    />

                    {/* Information */}
                    <View style={styles.profileHeader}>
                        <Text style={styles.header}>{userProfile?.name ?? userProfile?.username}</Text>
                        <Text style={styles.subheader}>@{userProfile?.username ?? "username"}</Text>
                        <Text style={styles.subheader}># Friends</Text>
                        {showNameInput && (
                            <TextInput
                                style={styles.usernameBox}
                                placeholder="Insert new name"
                                placeholderTextColor="#3B2828"
                                value={newName}
                                onChangeText={setNewName}
                            />
                        )}
                        <View style={styles.loginButton}>
                            <Button title="Change Name" color = 'black' onPress={() => {changeName()}}/>
                        </View>
                        <View style={styles.loginButton}>
                            <Button title="Sign Out" color = 'black' onPress={() => {logout()}}/>
                        </View>
                    </View>
                </View>

                {/* Recent Contributions */}
                <View style={{padding: 20}}></View>
                <Text style={styles.header}>Recent Contributions</Text>
                <View style={styles.buddyBonusContainer}>
                    <Image
                        style={{height: 100, width: 100}}
                        source={require("../assets/images/image0.webp")}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                        alt="Image0"
                    />
                    <Image
                        style={{height: 100, width: 100}}
                        source={require("../assets/images/image1.webp")}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                        alt="Image1"
                    />
                    <Image
                        style={{height: 100, width: 100}}
                        source={require("../assets/images/image2.webp")}
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                        alt="Image2"
                    />

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