import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText/AppText";
import Colors from "../config/Colors";
import ListItem from "../components/ListItem/ListItem";

export default function ListingDetailScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.secondary,
    marginTop: 10,
  },
  userContainer: {
    marginVertical: 20,
  },
});
