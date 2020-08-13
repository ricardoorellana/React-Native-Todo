import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TodoItem = ({ value }) => {
    return (
        <View style={styles.root}>
            <Text style={styles.textItem}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        margin: 20,
        marginBottom: 10,
        height: 20,
        borderStyle: "dashed",
        borderBottomWidth: 1
    },
    textItem: {
        color: '#403f3f'
    }
});

export default TodoItem;