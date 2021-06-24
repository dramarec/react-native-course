import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'
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
        // <View style={styles.wrapper}>
        //     <FlatList
        //         data={DATA.filter(post => post.booked)}
        //         keyExtractor={post => post.id.toString()}
        //         renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
        //     />
        // </View>
        <PostList data={data} onOpen={openPostHandler} />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
