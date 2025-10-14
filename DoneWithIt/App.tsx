import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard/AppCard";
import { View, StyleSheet } from "react-native";
import Colors from "./app/config/Colors";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen/Screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <WelcomeScreen /> */}
      {/* <AppCard title="Red Jacket for Sale" subTitle="100" image={require("./app/assets/jacket.jpg")} /> */}
      {/* <View style={styles.container}>
        <MessagesScreen />
      </View> */}
      {/* <ListingDetailScreen /> */}
      {/* <ViewImageScreen /> */}
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
