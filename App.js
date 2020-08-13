import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

export default function App() {
    const [todos, setTodos] = useState([]);

    const handleTodoClick = (todo) => {
        console.log(todo);
        const newTodo = {
            value: todo,
            key: Math.floor(Math.random() * 10000)
        };

        setTodos((prevTodos) => {
            return [
                newTodo,
                ...prevTodos
            ]
        });
    }

    return (
        <View style={styles.container}>
            <Header />
            <AddTodo onAddTodoClick={handleTodoClick} />
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem {...item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        backgroundColor: '#fff'
    },
});
