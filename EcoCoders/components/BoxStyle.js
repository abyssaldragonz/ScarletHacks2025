'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        minHeight: 100,
        margin: 20,
        marginLeft: 5,
        minWidth: 350,
        maxWidth: 400,
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

    textRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        paddingBottom: 0,
        alignItems: "center",
        width: "100%",
    },

    progressBar: {
        backgroundColor: '#F3F3F3',
        height: 20,
        minWidth: '90%',
        maxWidth: '90%',
        borderRadius: 7
    },

    completedBar: {
        backgroundColor: '#3B2828',
        maxWidth: 350,
        minWidth: '0%',
        maxWidth: '100%',
        height: 20,
        borderRadius: 7
    },

    header: {
        color: '#3B2828', 
        fontSize: 20, 
        fontWeight: 700
    },
    
    subheader: {
        color: '#3B2828', 
        fontSize: 15, 
        fontWeight: 500
    }
});