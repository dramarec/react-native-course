import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// use hook
// import { useRoute } from '@react-navigation/native';

export const PostScreen = ({ route }) => {
    // const postId = navigation.navigate('postId') //old
    // const route = useRoute()
    const postId = route.params.postId
    // console.log("🔥🚀 ===> PostScreen ===> postId", postId);

    return (
        <View style={styles.center}>
            <Text>{postId}</Text>
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


// props
// "navigation": Object {
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
//     "key": "PostScreen-Si6JyKg-PpDUKoozQpeqT",
//     "name": "PostScreen",
//     "params": Object {
//       "postId": "1",
//     },
//   },