import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App(): React.JSX.Element {
  const handlePress = (): void => {
    Alert.alert('Hello World', 'Button pressed!');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.text}>Hello World</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  } as TextStyle,
  logo: {
    width: 100,
    height: 100,
  } as ViewStyle,
});
