/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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
} from 'react-native';

export default function Form() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hello again</Text>
          <Text style={styles.headerTitle}>Welcome back</Text>
        </View>
        <View
          style={{ ...styles.form, marginBottom: isShowKeyboard ? 100 : 80 }}>
          <View>
            <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isShowKeyboard ? '#32cd32' : '#f0f8ff',
              }}
              textAlign={'center'}
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput
              style={{
                ...styles.input,
                borderColor: isShowKeyboard ? '#32cd32' : '#f0f8ff',
              }}
              textAlign={'center'}
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btn}
            onPress={keyboardHide}>
            <Text style={styles.btnTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 90,
  },
  headerTitle: {
    fontSize: 30,
    color: '#f0f8ff',
  },
  input: {
    borderWidth: 1,
    // borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 6,

    color: '#f0f8ff',
  },
  form: {
    marginHorizontal: 40,
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
