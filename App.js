import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Linking, StyleSheet, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./img.png')}
      />
      <View style={styles.button}>
        <Button
          style={styles.button}
          onPress={() => {
            Linking.openURL('kanguro://login-integration/12345/661216995');
          }}
          title="Login"
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.button}
          onPress={() => {
            Linking.openURL('kanguro://integration/123123123/8413080301264/Batllevell%20202');
          }}
          title="Delivery"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 50,
  },
  button: {
    marginBottom: 50,
  }
});
