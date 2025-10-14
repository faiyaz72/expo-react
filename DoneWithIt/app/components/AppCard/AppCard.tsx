import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../AppText/AppText";
import Colors from "../../config/Colors";

export default function AppCard({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: any;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 20,
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitle: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
