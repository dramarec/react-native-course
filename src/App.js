import 'react-native-gesture-handler';
import * as React from 'react';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Navbar from './components/Navbar';
// import Form from './screens/auth/Form';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            {/* <GestureHandlerRootView> */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* </GestureHandlerRootView> */}
        </>
    );
}
