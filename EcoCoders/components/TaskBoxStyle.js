'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        height: 100,
        margin: 20,
        minWidth: 350,
        width: "75%",
        padding: 20,
        color: '#3B2828'
    },

    textCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
    }
});