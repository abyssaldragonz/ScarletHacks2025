'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    layout: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#5A4141",
        borderRadius: 0,
        height: 85,
        width: "100%",
        top: 0,
        zIndex: 1000,
    },

    footer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        padding: 25,
        alignItems: "center",
        backgroundColor: "#5A4141",
        borderRadius: 0,
        height: 100,
        width: "100%",
        bottom: 0,
        zIndex: 1000,
    },

    buddy: {
        backgroundColor: "#3B2828",
        borderRadius: 15,
        height: 150,
        width: 150,
        padding: 10,
        alignItems: 'center'
    }
});