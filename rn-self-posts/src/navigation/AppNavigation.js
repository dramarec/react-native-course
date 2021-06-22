import React from 'react'
import { Platform } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
const AppNavigationStack = createStackNavigator()
import { useRoute } from '@react-navigation/native';

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
                <AppNavigationStack.Screen
                    name='PostScreen'
                    component={PostScreen}
                    options={({ route }) => ({
                        title: 'Пост от ' + new Date(route.params.date).toLocaleDateString()
                    })}
                // options={({ route }) => {
                //     // title: route.params.date
                //     const date = route.params.date
                //     return {
                //         title: new Date(date).toLocaleDateString()
                //     }
                // }}
                />
            </AppNavigationStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;

//  options={props =>  Object {
//   "navigation": Object {
//     "addListener": [Function addListener],
//     "canGoBack": [Function canGoBack],
//     "dangerouslyGetParent": [Function dangerouslyGetParent],
//     "dangerouslyGetState": [Function anonymous],
//     "dispatch": [Function dispatch],
//     "goBack": [Function anonymous],
//     "isFocused": [Function isFocused],
//     "navigate": [Function anonymous],
//     "pop": [Function anonymous],
//     "popToTop": [Function anonymous],
//     "push": [Function anonymous],
//     "removeListener": [Function removeListener],
//     "replace": [Function anonymous],
//     "reset": [Function anonymous],
//     "setOptions": [Function setOptions],
//     "setParams": [Function anonymous],
//   },
//   "route": Object {
//     "key": "PostScreen-ikyb3ID896ho4SickTydx",
//     "name": "PostScreen",
//     "params": Object {
//       "postId": "2",
//     },
//   },
// }