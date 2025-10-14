import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../config/Colors";

export default function AppButton({ title, onPress, color = "primary" }: { title: string, onPress: () => void, color?: keyof typeof Colors }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: Colors[color] }]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});