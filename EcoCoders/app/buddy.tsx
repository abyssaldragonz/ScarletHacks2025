import React, {useState} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import styles from './Style.js';

import Header from '../components/Header';
import Footer from '../components/Footer';

const blurhash = require("../assets/images/buddy/clear.webp");

interface BuddyProfile {
    name: string,
    species: string,
    hat: string,
    food: string,
    level: number,
    exp: number,
}

const placeholderBuddy : BuddyProfile = {
    name: "Scrunkly Scrimblo",
    species: "Rat",
    hat: require("../assets/images/buddy/dapper.webp"),
    food: require("../assets/images/buddy/lollipop.webp"),
    level: 99,
    exp: 150,
}

// Function to make sure Buddy stays the same upon page reload
// TODO
function pageReload(event: Event) {
    event.preventDefault();
}


export default function Buddy(bud : BuddyProfile) {
    bud = placeholderBuddy;
    
    const [hatType, setHat] = useState(require("../assets/images/buddy/dapper.webp"));
    const changeHat = (newHat:string) => setHat((hatType:string) => newHat);
    bud.hat = hatType;

    const [foodType, setFood] = useState(require("../assets/images/buddy/lollipop.webp"));
    const changeFood = (newFood:string) => setFood((foodType:string) => newFood);
    bud.food = foodType;

    const [buddyType, setBuddy] = useState("Rat");
    const changeBuddy = (newBuddy:string) => setBuddy((buddyType:string) => newBuddy);
    bud.species = buddyType;
    
    return (
        <SafeAreaView style={styles.layout}>
            <Header name={"EcoPet"}/>
            <ScrollView style={{paddingLeft: 25}}>
                <Text style={styles.header}>{bud.name}</Text>
                <View style={{padding: 5}}></View>
                <Text style={styles.subheader}>{bud.species}</Text>

                {/* Image */}
                {bud.species.toLowerCase() == "rat" && (
                    <View>
                        <Image
                            style={{margin: -125, marginBottom: -75, position: 'relative', alignSelf: 'center', height: 250, minWidth: 250, bottom: 0, zIndex: 50}}
                            source={bud.hat}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="RatHat"
                        />
                        <Image
                            style={{margin: -125, position: 'relative', alignSelf: 'center', height: 150, minWidth: 150, bottom: -125, right: 25, zIndex: 50}}
                            source={bud.food}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="RatFood"
                        />
                        <Image
                            style={styles.buddyImage}
                            source={require("../assets/images/buddy/scrunkly.gif")}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="Scrunkly"
                        />
                    </View>
                )}

                {bud.species.toLowerCase() == "snake" && (
                    <View>
                        <Image
                            style={{margin: -125, marginBottom: -75, position: 'relative', alignSelf: 'center', height: 250, minWidth: 250, bottom: -10, right:20, zIndex: 50}}
                            source={bud.hat}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="SnakeHat"
                        />
                        <Image
                            style={{margin: -125, position: 'relative', alignSelf: 'center', height: 150, minWidth: 150, bottom: -150, right: 50, zIndex: 50}}
                            source={bud.food}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="SnakeFood"
                        />
                        <Image
                            style={styles.buddyImage}
                            source={require("../assets/images/buddy/scrimblo.gif")}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="Scrimblo"
                        />
                    </View>
                )}

                { bud.species.toLowerCase() == "roly poly" && (
                    <View>
                        <Image
                            style={{margin: -125, position: 'relative', alignSelf: 'center', height: 250, minWidth: 250, bottom: -50, right: 35, zIndex: 50}}
                            source={bud.hat}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="PolyHat"
                        />
                        <Image
                            style={{margin: -125, position: 'relative', alignSelf: 'center', height: 150, minWidth: 150, bottom: -225, right: 75, zIndex: 50}}
                            source={bud.food}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="PolyFood"
                        />
                        <Image
                            style={styles.buddyImage}
                            source={require("../assets/images/buddy/scrunkle.gif")}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={1000}
                            alt="Scrunkle"
                        />
                    </View>
                )}

                {/* Change progress bar completion */}
                <View style={styles.progressBar}>
                    <View style={[styles.completedBar, {width: `${(bud).exp/10}%`}]}></View>
                </View>
                <Text style={{fontSize: 15, fontWeight: 700, textAlign: 'center', color: '#5A4141',}}>
                    {1000-bud.exp} EXP to the next level
                </Text>

                {/* Fun Bonus Stuff */}
                <View style={{padding: 10}}></View>
                <Text style={{textAlign: 'center', width: '75%', fontSize: 15, fontWeight: 700, backgroundColor: '#D9D9D9', borderRadius: 7, margin: 10, padding: 5, alignSelf: 'center'}}>Claim rewards in store!</Text>

                {/* Accessories */}
                <Text style={styles.subheader}>Add Accessories</Text>
                <View style={styles.buddyBonusContainer}>
                    <TouchableOpacity onPress={() => changeHat(require("../assets/images/buddy/dapper.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/dapper.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Tophat"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeHat(require("../assets/images/buddy/bow.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/bow.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Bowtie"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeHat(require("../assets/images/buddy/monocle.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/monocle.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Monocle"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeHat(require("../assets/images/buddy/bow2.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/bow2.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Bow"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeHat(require("../assets/images/buddy/clear.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/remove.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="REMOVE"
                        />
                    </TouchableOpacity>
                </View>


                {/* Food */}
                <View style={{padding: 20}}></View>
                <Text style={styles.subheader}>Feed Buddy</Text>
                <View style={styles.buddyBonusContainer}>
                    <TouchableOpacity onPress={() => changeFood(require("../assets/images/buddy/bone.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/bone.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Bone"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeFood(require("../assets/images/buddy/carrot.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/carrot.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Carrot"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeFood(require("../assets/images/buddy/muffin.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/muffin.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Muffin"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeFood(require("../assets/images/buddy/lollipop.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/lollipop.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Lollipop"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeFood(require("../assets/images/buddy/clear.webp"))}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/remove.webp")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="REMOVE"
                        />
                    </TouchableOpacity>
                </View>


                {/* Change Buddy */}
                <View style={{padding: 25}}></View>
                <Text style={styles.subheader}>Change Buddy</Text>
                <View style={styles.buddyBonusContainer}>
                    <TouchableOpacity onPress={() => changeBuddy("Rat")}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/scrunkly.gif")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Bone"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBuddy("Snake")}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/scrimblo.gif")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Bone"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeBuddy("Roly Poly")}>
                        <Image
                            style={styles.image}
                            source={require("../assets/images/buddy/scrunkle.gif")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                            alt="Bone"
                        />
                    </TouchableOpacity>

                </View>

            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}