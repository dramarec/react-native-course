import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const CreateScreen = ({ route }) => {
    console.log("🔥🚀 ===> CreateScreen ===> route", route);
    return (
        <View style={styles.center}>
            {/* <Text>CreateScreen</Text> */}
            <Text>{route.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
