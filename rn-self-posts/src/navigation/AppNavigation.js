import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
const AppNavigationStack = createStackNavigator()

// import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import AppHeaderIcon from '../components/AppHeaderIcon'


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
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: 20 }}
                                onPress={() => console.log('Press photo')}
                            >
                                <Ionicons
                                    name="ios-menu"
                                    size={24}
                                    color="black"
                                    backgroundColor='#ccfd'
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: 20 }}
                                onPress={() => console.log('Press photo')}
                            >
                                <Ionicons
                                    name="ios-camera"
                                    size={24}
                                    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                                    backgroundColor='#ccfd'
                                />
                            </TouchableOpacity>
                        )

                    }}
                />
                <AppNavigationStack.Screen
                    name='PostScreen'
                    component={PostScreen}
                    // options={({ route }) => ({
                    // title: 'Пост от ' + new Date(route.params.date).toLocaleDateString(),
                    //     headerRight: () => (

                    // <TouchableOpacity TouchableOpacity
                    //     style={{ marginRight: 20 }}
                    //     onPress={() => console.log('Press photo')}
                    // >
                    //     <Ionicons
                    //         name="ios-camera"
                    //         size={24}
                    //         color="black"
                    //         backgroundColor='#ccfd'
                    //     />
                    // </TouchableOpacity>
                    //     )
                    // })}
                    options={({ route }) => {
                        const date = route.params.date
                        const iconName = route.params.booked ? 'ios-star' : 'ios-star-outline'
                        return {
                            title: 'Пост от ' + new Date(date).toLocaleDateString(),
                            headerRight: () => (
                                <TouchableOpacity TouchableOpacity
                                    style={{ marginRight: 20 }}
                                    onPress={() => console.log('Press photo')}
                                >
                                    <Ionicons
                                        name={iconName}
                                        size={24}
                                        color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                                        backgroundColor='#ccfd'
                                    />
                                </TouchableOpacity>
                            )
                        }
                    }}
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