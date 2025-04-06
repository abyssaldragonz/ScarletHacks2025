'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        minHeight: 100,
        margin: 20,
        minWidth: 350,
        width: "75%",
        padding: 20,
        color: '#3B2828'
    },

    compactLayout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        width: "100%",
    },

    textCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
    },

    progressBar: {
        backgroundColor: '#F3F3F3',
    },

    completedBar: {
        backgroundColor: '#3B2828',
    }
});