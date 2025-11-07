import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Screen({ children, style }: { children: React.ReactNode, style?: StyleProp<ViewStyle> }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});