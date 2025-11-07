import React from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen/Screen";
import ListItem from "../components/ListItem/ListItem";
import IconComponent from "../components/IconComponent/IconComponent";
import { FlatList } from "react-native";
import Colors from "../config/Colors";

const menuItems = [
  {
    title: "My Listings",
    icon: "format-list-bulleted",
    backgroundColor: Colors.primary,
  },
  {
    title: "My Messages",
    icon: "email",
    backgroundColor: Colors.secondary,
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="Programing@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.menuContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<IconComponent name={item.icon} size={50} backgroundColor={item.backgroundColor} iconColor="white" />}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<IconComponent name="logout" size={50} backgroundColor="#ffe66d" iconColor="black" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
  },
  container: {
    marginVertical: 20,
  },
  menuContainer: {
    marginVertical: 20,
    backgroundColor: Colors.light,
    borderRadius: 10,
  },
});