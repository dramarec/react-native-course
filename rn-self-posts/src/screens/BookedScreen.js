import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { DATA } from '../data'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/post'

export const BookedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('PostScreen', {
            postId: post.id,
            date: post.date,
            booked: post.booked
        })
    }
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.bookedPosts)

    // const data = DATA.filter(post => post.booked)

    return (
        <PostList data={allPosts} onOpen={openPostHandler} />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
