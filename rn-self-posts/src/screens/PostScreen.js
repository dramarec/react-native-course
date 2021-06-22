import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, Button, Alert } from 'react-native'
// use hook
// import { useRoute } from '@react-navigation/native';
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ route }) => {
    // const postId = navigation.navigate('postId') //old
    // const route = useRoute()
    const postId = route.params.postId
    const post = DATA.find(post => post.id === postId)

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                { text: 'Удалить', style: 'destructive', onPress: () => { } }
            ],
            { cancelable: false }
        )
    }

    return (
        <ScrollView>
            <Image source={{ uri: post.img }} style={styles.img} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>{postId}</Text>
            </View>
            <Button
                title='Удалить'
                color={THEME.DANGER_COLOR}
                onPress={removeHandler}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
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