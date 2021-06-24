import React from 'react'
import { StyleSheet } from 'react-native'
import { DATA } from '../data'
import { PostList } from '../components/PostList'

export const BookedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('PostScreen', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }

    const data = DATA.filter(post => post.booked)

    return (
        <PostList data={data} onOpen={openPostHandler} />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
