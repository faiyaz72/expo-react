import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../config/Colors";

export default function ItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.black,
  },
});
