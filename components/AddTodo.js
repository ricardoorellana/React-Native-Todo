import React, { useState } from 'react';

import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodo = ({ onAddTodoClick }) => {
    const [value, setValue] = useState('');

    const handleAddTodoClick = () => {
        onAddTodoClick(value);
        setValue('');
    }

    return (
        <View sytle={styles.root}>
            <TextInput
                placeholder="Your today's todo"
                style={styles.textInput}
                onChangeText={val => setValue(val)}
                value={value}
            />
            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={handleAddTodoClick} color="#f5d1ca" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    textInput: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#9ea19a',
        paddingLeft: 10
    },
    buttonContainer: {
        marginLeft: 20,
        marginRight: 20,
    }
});

export default AddTodo;