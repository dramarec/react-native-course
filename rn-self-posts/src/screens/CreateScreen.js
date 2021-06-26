import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import { useDispatch } from 'react-redux'
import { THEME } from '../theme'
import { addPost } from '../store/actions/post'
import { PhotoPicker } from '../components/PhotoPicker'

export const CreateScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const imgRef = useRef()

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            // img: img,
            img: imgRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('MainScreen')
    }

    const photPickHandler = uri => {
        imgRef.current = uri
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Создай новый пост</Text>

                    <PhotoPicker onPick={photPickHandler} />
                    <TextInput
                        style={styles.textarea}
                        placeholder='Введите текст заметки'
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Button
                        title='Создать пост'
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        // disabled={!text || !imgRef.current}
                        disabled={!text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    }
})
