import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Image } from 'expo-image';
import styles from './Style.js';

import Header from '../components/Header';
import Footer from '../components/Footer';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


interface BuddyProfile {
    name: string,
    species: string,
    level: number,
    exp: number,
}

export default function Buddy(bud:BuddyProfile) {
    return (
        <SafeAreaView style={styles.layout}>
            <Header name={"BioBuddy"}/>
            <ScrollView style={{paddingLeft: 25}}>
                <Text style={styles.header}>{bud.name}Buddy Name</Text>
                <View style={{padding: 5}}></View>
                <Text style={styles.subheader}>{bud.species}Buddy Species</Text>

                {/* Image */}
                {// bud.species == "rat" && 
                (
                    <Image
                        style={styles.buddyImage}
                        source={require("../assets/images/buddy/scrunkly.gif")}
                        placeholder={{ blurhash }}
                        contentFit="contain"
                        transition={1000}
                        alt="Scrunkly"
                    />
                )}

                {bud.species == "snake" && (
                    <Image
                        style={styles.buddyImage}
                        source={require("../assets/images/buddy/scrimblo.gif")}
                        placeholder={{ blurhash }}
                        contentFit="contain"
                        transition={1000}
                        alt="Scrimblo"
                    />
                )}

                { bud.species == "poly" && (
                    <Image
                        style={styles.buddyImage}
                        source={require("../assets/images/buddy/scrunkle.gif")}
                        placeholder={{ blurhash }}
                        contentFit="contain"
                        transition={1000}
                        alt="Scrunkle"
                    />
                )}


                <View style={styles.progressBar}>
                    <View style={styles.completedBar}></View>
                </View>
                <Text style={{fontSize: 15, fontWeight: 700, textAlign: 'center', color: '#5A4141',}}>
                    {1000-bud.exp} EXP to the next level
                </Text>

                <View style={{padding: 10}}></View>
                <Text style={{textAlign: 'center', width: '75%', fontSize: 15, fontWeight: 700, backgroundColor: '#D9D9D9', borderRadius: 7, margin: 10, padding: 5, alignSelf: 'center'}}>Claim rewards in store!</Text>

                <Text style={styles.subheader}>Add Accessories</Text>
                <View style={styles.buddyBonusContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/dapper.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Tophat"
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/bow.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Bowtie"
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/antennae.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Antennae"
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/bow2.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Bow"
                    />
                </View>

                <View style={{padding: 20}}></View>

                <Text style={styles.subheader}>Feed Buddy</Text>
                <View style={styles.buddyBonusContainer}>
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/bone.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Bone"
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/carrot.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Carrot"
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/muffin.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Muffin"
                    />
                    <Image
                        style={styles.image}
                        source={require("../assets/images/buddy/lollipop.webp")}
                        placeholder={{ blurhash }}
                        contentFit="cover"
                        transition={1000}
                        alt="Lollipop"
                    />
                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}
