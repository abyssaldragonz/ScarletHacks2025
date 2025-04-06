'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    // Global Pages
    landing: {
        flex: 1,
        display: 'flex',
        justifyContent: "center",
        gap: 25,
        alignItems: "center",
        backgroundColor: "#5A4141",
        height: "100%"
    },

    layout: {
        paddingTop: 150,
        paddingBottom: 150,
        display: 'flex',
        gap: 20,
        alignItems: "center",
        backgroundColor: "#BDC499",
        height: "100%",
        width: '100%',
        flexWrap: 'wrap'
    },


    title: {
        fontSize: 30, 
        fontWeight: 900, 
        textAlign: 'center', 
        color: '#D9D9D9'
    },

    header: {
        fontSize: 25, 
        fontWeight: 800, 
        textAlign: 'left', 
        color: '#3B2828',
        // marginLeft: 25
    },

    subheader: {
        fontSize: 15, 
        fontWeight: 700, 
        textAlign: 'left', 
        color: '#5A4141',
        // marginTop: 25
    },

    link: {
        backgroundColor: 'white',
        padding: 20
    },

    image: {
        height: 100,
        width: 100
    },

    // Login Page
    loginBox: {
        display: 'flex',
        gap: 20,
        backgroundColor: '#BDC499',
        alignItems: 'center',
        width: 300,
        height: 400,
        borderRadius: 20,
        padding: 10,
        paddingTop: 25,
    },

    usernameBox: {
        backgroundColor: '#D9D9D9',
        color: 'black',
        width: 260,
        height: 40,
        borderRadius: 15,
        padding: 10,
    },

    passwordBox: {
        backgroundColor: '#D9D9D9',
        color: 'black',
        width: 260,
        height: 40,
        borderRadius: 15,
        padding: 10,
    },

    loginButton:
    {
        backgroundColor: '#D9D9D9',
        color: '#3B2828',
        width: 150,
        height: 40,
        borderRadius: 15,
        textAlign: 'center',
    },

    // Home Page
    progressBar: {
        backgroundColor: '#F3F3F3',
        height: 20,
        minWidth: '90%',
        maxWidth: '90%',
        borderRadius: 10,
        alignSelf: 'center'
    },

    completedBar: {
        backgroundColor: '#3B2828',
        maxWidth: 350,
        minWidth: '0%',
        maxWidth: '90%',
        borderRadius: 10
    },

    // Buddy Page
    buddyImage: {
        height: 300,
        marginBottom: 10,
    },

    buddyBonusContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    // Profile Page
    profileHeader: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },

    userImage: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: '#D9D9D9'
    },

    leaderboard: {
        display: 'flex',
        flexDirection: 'column',
        gap: -5,
    }
});