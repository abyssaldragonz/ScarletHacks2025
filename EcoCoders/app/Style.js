'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
        display: 'flex',
        justifyContent: "center",
        gap: 25,
        alignItems: "center",
        backgroundColor: "#BDC499",
        height: "100%",
    },

    loginBox: {
        display: 'flex',
        gap: 20,
        backgroundColor: '#BDC499',
        width: 300,
        height: 400,
        borderRadius: 20,
        padding: 20,
        paddingTop: 50,
    },

    userNameBox: {
        backgroundColor: '#D9D9D9',
        color: 'green',
        width: 250,
        height: 40,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20
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
        // alignSelf: 'start',
        color: '#3B2828',
        marginLeft: 50
    },

    link: {
        backgroundColor: 'white',
        padding: 20
    }
});