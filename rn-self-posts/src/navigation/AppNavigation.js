import React from 'react'
import { Platform, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
const AppNavigationStack = createStackNavigator()
const BookedScreenStack = createStackNavigator()
const AboutScreenStack = createStackNavigator()
const CreateScreenStack = createStackNavigator()

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
const TabAppNavigation = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
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

const MainScreenNavigation = ({ navigation }) => {
    return (
        <AppNavigationStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                },
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
                    headerLeft: () => {
                        return (
                            <TouchableOpacity
                                style={{ marginLeft: 20 }}
                                onPress={() => navigation.toggleDrawer()}
                            >
                                <Ionicons
                                    name="ios-menu"
                                    size={28}
                                    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
                                    backgroundColor='#ccfd'
                                />
                            </TouchableOpacity>
                        )
                    },
                    headerRight: ({ }) => (
                        <TouchableOpacity
                            style={{ marginRight: 20 }}
                            onPress={() => navigation.navigate('CreateScreen', { name: 'ReactNative' })}
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
            {postSreenFunc(navigation)}
        </AppNavigationStack.Navigator >
    );
}

const BookedScreenNavigation = ({ navigation }) => {
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
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.toggleDrawer()}

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
            {postSreenFunc(navigation)}
        </BookedScreenStack.Navigator>
    )
}

const CreateScreenNavigator = ({ navigation }) => {
    return (
        <CreateScreenStack.Navigator
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
            <CreateScreenStack.Screen
                name='CreateScreen'
                component={CreateScreen}
                options={{
                    title: 'CreateScreen',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.toggleDrawer()}
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
        </CreateScreenStack.Navigator>
    )
}

const AboutScreenNavigator = ({ navigation }) => {
    return (
        <AboutScreenStack.Navigator
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
            <AboutScreenStack.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={{
                    title: 'AboutScreen',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.toggleDrawer()}

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
        </AboutScreenStack.Navigator>
    )
}

const TabNavigation = () => {
    return (
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
    )
}

const MainDrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{
                    backgroundColor: '#c6cbef',
                    width: 180,
                }}
                drawerContentOptions={{
                    activeTintColor: THEME.MAIN_COLOR,
                    labelStyle: {
                        fontFamily: 'open-bold'
                    },

                    itemStyle: { marginVertical: 10 },
                }}
            >
                <Drawer.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{
                        title: 'Главная',
                        // drawerLabel: ({ focused, color }) => (
                        // ),
                        drawerIcon: ({ focused, size, color }) => (
                            <Ionicons
                                name='ios-star'
                                size={16}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="AboutScreen"
                    component={AboutScreenNavigator}
                    options={{ title: 'О приложении' }}

                />
                <Drawer.Screen
                    name="CreateScreen"
                    component={CreateScreenNavigator}
                    options={{ title: 'Новый пост' }}

                />
            </Drawer.Navigator>
        </NavigationContainer >
    )
}
export default MainDrawerNavigator;


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