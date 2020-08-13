import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.root}>
            <Text style={styles.title}>My Todo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginTop: 0,
        paddingLeft: 15,
        display: "flex",
        justifyContent: "center",
        height: 40,
        backgroundColor: '#403f3f'
    },
    title: {
        fontSize: 15,
        color: '#faf9f7'
    }
});


export default Header;