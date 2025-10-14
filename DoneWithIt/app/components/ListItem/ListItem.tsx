import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../AppText/AppText";
import Colors from "../../config/Colors";

export default function ListItem({title, subTitle, image}: {title: string, subTitle: string, image: any }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: Colors.medium,
  },
});