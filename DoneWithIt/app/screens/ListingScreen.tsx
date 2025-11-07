import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen/Screen";
import ListItem from "../components/ListItem/ListItem";
import { FlatList } from "react-native";
import Colors from "../config/Colors";
import AppCard from "../components/AppCard/AppCard";

const listings = [
  {
    id: 1,
    title: "Red Jacket for Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in Great Condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
    padding: 20,
  },
});