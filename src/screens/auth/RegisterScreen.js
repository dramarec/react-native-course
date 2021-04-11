/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions,
} from 'react-native';

const initialState = {
    email: '',
    password: '',
    nickname: '',
};

export default function Form() {
    console.log(Platform.OS);

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    const [dimensions, setdimensions] = useState(
        Dimensions.get('window').width - 20 * 2,
    );
    useEffect(() => {
        const onChange = () => {
            const width = Dimensions.get('window').width - 20 * 2;
            console.log('onChange ===> width', width);
            setdimensions(width);
        };
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    }, []);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log('state :', state);
        setState(initialState);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    source={require('../../assets/images/stars-on-night.jpg')}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View
                            style={{
                                ...styles.form,
                                marginBottom: isShowKeyboard ? 20 : 150,
                                width: dimensions,
                            }}>
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>Hello</Text>
                                <Text style={styles.headerTitle}>
                                    Sign up to get started
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.inputTitle}>NICKNAME</Text>
                                <TextInput
                                    style={{
                                        ...styles.input,
                                        borderColor: isShowKeyboard
                                            ? '#32cd32'
                                            : '#f0f8ff',
                                    }}
                                    textAlign={'center'}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.email}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            nickname: value,
                                        }))
                                    }
                                />
                            </View>

                            <View style={{marginTop: 20}}>
                                <Text style={styles.inputTitle}>
                                    EMAIL ADDRES
                                </Text>

                                <TextInput
                                    style={{
                                        ...styles.input,
                                        borderColor: isShowKeyboard
                                            ? '#32cd32'
                                            : '#f0f8ff',
                                    }}
                                    textAlign={'center'}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.email}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            email: value,
                                        }))
                                    }
                                />
                            </View>

                            <View style={{marginTop: 20}}>
                                <Text style={styles.inputTitle}>PASSWORD</Text>
                                <TextInput
                                    style={{
                                        ...styles.input,
                                        borderColor: isShowKeyboard
                                            ? '#32cd32'
                                            : '#f0f8ff',
                                    }}
                                    textAlign={'center'}
                                    secureTextEntry={true}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    value={state.password}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            password: value,
                                        }))
                                    }
                                />
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.btn}
                                onPress={keyboardHide}>
                                <Text style={styles.btnTitle}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    image: {
        flex: 1,
        // justifyContent: 'center',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 60,
    },
    headerTitle: {
        fontSize: 30,
        color: '#f0f8ff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#f0f8ff',
        height: 40,
        borderRadius: 6,

        color: '#f0f8ff',
    },
    form: {
        // marginHorizontal: 40,
        // marginBottom: 100,
    },
    inputTitle: {
        color: '#f0f8ff',
        marginBottom: 10,
        fontSize: 18,
    },
    btn: {
        height: 40,
        borderRadius: 6,
        borderWidth: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        ...Platform.select({
            ios: {
                backgroundColor: 'transparent',
                borderColor: '#f0f8ff',
            },
            android: {
                backgroundColor: '#4169e1',
                borderColor: 'transparent',
            },
        }),
        // backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#4169e1',
        // borderColor: Platform.OS === 'ios' ? '#f0f8ff' : 'transparent',
    },
    btnTitle: {
        color: Platform.OS === 'ios' ? '#4169e1' : '#f0f8ff',
        fontSize: 18,
    },
});
