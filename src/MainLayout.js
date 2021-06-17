import React, { useState, useContext } from 'react'
import { StyleSheet, View, Alert } from 'react-native'

import { Navbar } from './components/Navbar'
import { ScreenContext } from './context/screen/screenContext'
import { TodoContext } from './context/todo/todoContext'
import { MainScreen } from './screens/MainScreen'
import { TodoScreen } from './screens/TodoScreen'
import { THEME } from './theme'


export default function MainLayout() {
    // const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    console.log("🔥🚀 ===> MainLayout ===> todoId", todoId);

    // let content = (
    //     <MainScreen
    //         // todos={todos}
    //         // addTodo={addTodo}
    //         // removeTodo={removeTodo}
    //         // // openTodo={setTodoId}
    //         // openTodo={changeScreen}
    //     />
    // )

    // if (todoId) {
    //     const selectedTodo = todos.find(todo => todo.id === todoId)
    //     content = (
    //         <TodoScreen
    //             onRemove={removeTodo}
    //             // goBack={() => setTodoId(null)}
    //             goBack={() => changeScreen(null)}
    //             todo={selectedTodo}
    //             onSave={updateTodo}
    //         />
    //     )
    // }

    return (
        <View>
            <Navbar title='Todo App!' />
            {/* <View style={styles.container}>{content}</View> */}
            <View style={styles.container}>
                {todoId ? <TodoScreen /> : <MainScreen />}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
    }
})

    // const removeTodo = id => {
        // const todo = todos.find(t => t.id === id)

    // }