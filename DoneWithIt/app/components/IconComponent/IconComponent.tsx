import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconComponent({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}: {
  name: string;
  size: number;
  backgroundColor: string;
  iconColor: string;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name as any} size={size * 0.5} color={iconColor} />
    </View>
  );
}
