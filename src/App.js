import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Navbar from './Navbar';
// import AddTodo from './AddTodo';
import Form from './Form';

const App = () => {
  return (
    <>
      <View style={styles.body}>
        <Navbar title="React Native" />
        <ImageBackground
          style={styles.image}
          source={require('./assets/img/stars-on-night.jpg')}>
          {/* <AddTodo /> */}
          <Form />
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  image: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});

export default App;
