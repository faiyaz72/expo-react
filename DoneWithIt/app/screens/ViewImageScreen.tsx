import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Colors from "../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={30} color={Colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={30} color={Colors.white} />
      </View>
      <Image resizeMode="contain" source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});