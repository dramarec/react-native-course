import React from 'react';
import {StyleSheet, TextInput, Text, Button, View} from 'react-native';

const AddTodo = () => {
  return (
    <>
      <View style={styles.form}>
        <Text style={styles.inputTitle}>Email Addres</Text>
        <TextInput style={styles.input} textAlign={'center'} />
        <Button title="Add" />
      </View>
    </>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {color: '#f0f8ff', marginBottom: 10, fontSize: 18},
  input: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    height: 40,
    borderRadius: 6,
    marginHorizontal: 40,
    color: '#f0f8ff',
  },
});
