import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";
import { styles } from "./styles";

export default function AppText({ children, style }: { children: React.ReactNode, style?: StyleProp<TextStyle> }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}


