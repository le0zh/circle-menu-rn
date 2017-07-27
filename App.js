import React from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';

import CircleMenu from './src/CircleMenu';

export default class App extends React.Component {
  _showMessage = () => {
    ToastAndroid.show('btn clicked', ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        <CircleMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
