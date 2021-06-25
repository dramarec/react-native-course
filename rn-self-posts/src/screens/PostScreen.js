import React, { useEffect, useCallback } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removePost, toogleBooked } from '../store/actions/post'

import { useNavigation } from '@react-navigation/core';

// use hook
// import { useRoute } from '@react-navigation/native';
// import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    // const route = useRoute()
    // const navigation = useNavigation();

    const postId = route.params?.postId
    // const post = DATA.find(post => post.id === postId)

    const post = useSelector(state =>
        state?.post?.allPosts.find(p => p.id === postId)
    )

    const booked = useSelector(state =>
        state?.post?.bookedPosts.some(post => post.id === postId)
    )

    const toogleHandler = useCallback(() => {
        console.log(postId)
        dispatch(toogleBooked(postId))
    }, [dispatch, postId])

    useEffect(() => {
        navigation.setParams({ toogleHandler })
    }, [toogleHandler])

    useEffect(() => {
        navigation.setParams({ booked })
    }, [booked])

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                {
                    text: 'Удалить', style: 'destructive',
                    onPress() {
                        navigation.navigate('MainScreen')
                        dispatch(removePost(postId))
                    }
                }
            ],
            { cancelable: false }
        )
    }
    if (!post) {
        return null
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
            // onPress={() =>
            //     navigation.navigate('MainScreen'),
            //     removeHandler
            // }

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