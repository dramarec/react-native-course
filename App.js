import React from 'react'
import { useFonts } from 'expo-font'

import { TodoState } from './src/context/todo/TodoState'
import MainLayout from './src/MainLayout'

export default function App() {
    const [loaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'dm-italic': require('./assets/fonts/DMMono-Italic.ttf'),
    })

    if (!loaded) {
        return (
            null
        )
    }

    return (
        <TodoState>
            <MainLayout />
        </TodoState>
    )
}