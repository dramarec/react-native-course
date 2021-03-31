import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default function Form() {
  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
        <TextInput style={styles.input} textAlign={'center'} />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.inputTitle}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          textAlign={'center'}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text style={styles.btnTitle}>SIGN IN</Text>
      </TouchableOpacity>
      {/* <Button title="SIGN IN" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 6,

    color: '#f0f8ff',
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: '#f0f8ff',
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#4169e1',
    height: 40,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Platform.OS === 'ios' ? '#f0f8ff' : 'transparent',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  btnTitle: {
    color: Platform.OS === 'ios' ? '#4169e1' : '#f0f8ff',
    fontSize: 18,
  },
});
