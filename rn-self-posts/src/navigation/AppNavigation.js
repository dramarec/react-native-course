import React from 'react'
import { Platform } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
const AppNavigationStack = createStackNavigator()

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <AppNavigationStack.Navigator screenOptions={{
                headerStyle: {
                    // backgroundColor: '#1f65ff',
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'

                },
                // headerTintColor: '#fff',
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                },
            }}>
                <AppNavigationStack.Screen
                    name='MainScreen'
                    component={MainScreen}
                    options={{
                        title: 'New Options',
                        headerStyle: {
                            backgroundColor: '#ccfd',
                        },
                        // headerTintColor: '#555'
                        // headerTintColor: '#fff',

                    }}
                />
                <AppNavigationStack.Screen name='PostScreen' component={PostScreen} />
            </AppNavigationStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
