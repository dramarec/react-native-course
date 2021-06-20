import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'

import { ScreenContext } from '../screen/screenContext'
import {
    ADD_TODO, REMOVE_TODO, UPDATE_TODO,
    SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR,
    FETCH_TODOS
} from '../types'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }) => {
    const initialState = {
        // todos: [{ id: '1', title: 'Выучить React Native' }]
    }
    const { changeScreen } = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const response = await fetch('https://test-rn-firebase-8339e-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })

            const data = await response.json()


            const todos = Object.keys(data).map(key => ({
                ...data[key], id: key
            }))
            console.log("🔥🚀 ===>todos", todos);
            dispatch({ type: FETCH_TODOS, todos })
        } catch (error) {
            showError('Error try again later')
            console.log(error)
        } finally {
            hideLoader()
        }


    }

    const addTodo = async title => {
        const response = await fetch('https://test-rn-firebase-8339e-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            })

        const data = await response.json()

        console.log("🔥🚀 ===> addTodo ===> data", data.name);

        dispatch({ type: ADD_TODO, title, id: data.name })
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {
            await fetch(`https://test-rn-firebase-8339e-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title })
                })
            dispatch({ type: UPDATE_TODO, id, title })
        } catch (e) {
            showError('Что-пошло не так...')
            console.log(e)
        }
    }
    // const updateTodo = (id, title) => {
    //     dispatch({ type: UPDATE_TODO, id, title })
    // }

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)
        Alert.alert(
            'Удаление элемента',
            `Вы уверены, что хотите удалить "${todo.title}"?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: async () => {
                        changeScreen(null)
                        await fetch(`https://test-rn-firebase-8339e-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
                            {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' }
                            }
                        )
                        dispatch({ type: REMOVE_TODO, id })
                    }
                }
            ],
            { cancelable: false }
        )
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

    return (
        <TodoContext.Provider
            value={{
                loading: state.loading,
                error: state.error,
                todos: state.todos,
                fetchTodos,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
