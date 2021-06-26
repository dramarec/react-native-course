import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Button, Alert, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
// import * as Permissions from 'expo-permissions'

//https://docs.expo.io/versions/v41.0.0/sdk/permissions/#bare-workflow
// async function askForPermissions() {
//     const { status } = await Permissions.askAsync(
//         Permissions.CAMERA,
//         Permissions.MEDIA_LIBRARY
//         // Permissions.CAMERA_ROLL
//     )
//     if (status !== 'granted') {
//         Alert.alert('Ошибка', 'Вы не дали прав на создание фото')
//         return false
//     }
//     return true
// }

export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'ios') {
                const { status } = ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!')
                }
            }
        })()
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            madiaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        console.log("🔥🚀 ===> pickImage ===> result", result);

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const takePhoto = async () => {
        // const hasPermissions = await askForPermissions()
        // if (!hasPermissions) {
        //     return
        // }
        const result = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })
        if (!result.cancelled) {
            setImage(result.uri)
            onPick(result.uri)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Button title='Camera roll' onPress={pickImage} />
            <Button title='Сделать фото' onPress={takePhoto} />
            {image && <Image style={styles.image} source={{ uri: image }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10
    }
})
