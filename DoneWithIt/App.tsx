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
import AccountScreen from "./app/screens/AccountScreen";
import AppText from "./app/components/AppText/AppText";
import IconComponent from "./app/components/IconComponent/IconComponent";
import ListItemDeleteAction from "./app/components/ListItem/ListItemDeleteAction";
import ListItem from "./app/components/ListItem/ListItem";
import ListingScreen from "./app/screens/ListingScreen";

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
      {/* <MessagesScreen /> */}
      <Screen>
        <ListingScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}
