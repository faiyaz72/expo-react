import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

export default function ListItemDeleteAction({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  delete: {
    backgroundColor: Colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
