import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
const AppNavigationStack = createStackNavigator()
const BookedScreenStack = createStackNavigator()

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const TabAppNavigation = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

// const TabAppNavigation = createBottomTabNavigator();

import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { THEME } from '../theme'

const postSreenFunc = () => (
    <AppNavigationStack.Screen
        name='PostScreen'
        component={PostScreen}
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
)


const MainScreenNavigation = () => {
    return (
        <AppNavigationStack.Navigator
            screenOptions={{
                headerStyle: {
                    // backgroundColor: '#ccfd',
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                },
                // headerTintColor: '#fff',
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22
                },

            }}>
            <AppNavigationStack.Screen
                name='MainScreen'
                component={MainScreen}
                options={{
                    title: 'Мой блог',
                    // headerStyle: {
                    // backgroundColor: '#ccfd',
                    // },
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // },
                    // headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 20 }}
                            onPress={() => console.log('Press photo')}
                        >
                            <Ionicons
                                name="ios-menu"
                                size={28}
                                color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
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
                                size={28}
                                color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                                backgroundColor='#ccfd'
                            />
                        </TouchableOpacity>
                    )

                }}
            />
            {postSreenFunc()}
            {/* <AppNavigationStack.Screen
                name='PostScreen'
                component={PostScreen}
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
            /> */}
        </AppNavigationStack.Navigator>
    );
}

const BookedScreenNavigation = () => {
    return (
        <BookedScreenStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                },

            }}>
            <BookedScreenStack.Screen
                name='MainScreen'
                component={BookedScreen}
                options={{
                    title: 'Избранное',
                    // headerStyle: {
                    //     backgroundColor: '#ccfd',
                    // },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 20 }}
                            onPress={() => console.log('Press photo')}
                        >
                            <Ionicons
                                name="ios-menu"
                                size={28}
                                color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                                backgroundColor='#ccfd'
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            {postSreenFunc()}

            {/* <BookedScreenStack.Screen
                name='PostScreen'
                component={PostScreen}
                options={({ route }) => {
                    const booked = route.params.booked
                    const date = route.params.date
                    const iconName = booked ? 'ios-star' : 'ios-star-outline'
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
            /> */}

        </BookedScreenStack.Navigator>
    )
}

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <TabAppNavigation.Navigator
                //IOS
                tabBarOptions={{
                    activeTintColor: THEME.MAIN_COLOR,
                }}
                //Android
                shifting={true}
                barStyle={{
                    backgroundColor: THEME.MAIN_COLOR,
                }}
            >
                <TabAppNavigation.Screen
                    name='Все'
                    component={MainScreenNavigation}
                    options={{
                        tabBarIcon: ({ focused, size, color }) => (
                            <Ionicons
                                name='ios-albums'
                                // size={size}
                                size={22}
                                color={color}
                            // focused={focused}
                            />
                        )
                    }}
                />
                <TabAppNavigation.Screen
                    name='Избранные'
                    component={BookedScreenNavigation}
                    options={{
                        tabBarIcon: ({ focused, size, color }) => (
                            <Ionicons
                                name='ios-star'
                                // size={size}
                                size={22}
                                color={color}
                            />
                        )
                    }}
                />
            </TabAppNavigation.Navigator>
        </NavigationContainer >

    )
}

export default TabNavigation;


                    // activeTintColor: '#2eb4e5',
                    // activeTintColor: '#1f65ff',
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