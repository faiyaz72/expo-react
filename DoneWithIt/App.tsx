import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard/AppCard";
import { View, StyleSheet } from "react-native";
import Colors from "./app/config/Colors";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";

export default function App(): React.JSX.Element {
  return (
    // <WelcomeScreen />
    // <AppCard title="Red Jacket for Sale" subTitle="100" image={require("./app/assets/jacket.jpg")} />
    // <View style={styles.container}>
    //   <AppCard title="Red Jacket for Sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // </View>
    <ListingDetailScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f4f4",
    paddingTop: 100,
  },
});

