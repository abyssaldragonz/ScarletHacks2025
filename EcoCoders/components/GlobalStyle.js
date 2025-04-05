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
        height: 100,
        width: "100%",
        top: 0,
        zIndex: 1000,
    }
});