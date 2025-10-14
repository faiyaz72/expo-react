import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ItemSeparator from "../components/ItemSeparator/ItemSeparator";
import AppText from "../components/AppText/AppText";
import Colors from "../config/Colors";
import ListItemDeleteAction from "../components/ListItem/ListItemDeleteAction";

export default function MessagesScreen() {
  const initialMessages = [
    {
      id: 1,
      title: "T1",
      subTitle: "S1",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      subTitle: "S2",
      image: require("../assets/mosh.jpg"),
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (item: any) => {
    const newMessages = messages.filter((message) => message.id !== item.id);
    setMessages(newMessages);
  };

  const handleRefresh = () => {
    setMessages(initialMessages);
    setRefreshing(false);
  };

  return (
    <Screen>
      <FlatList
        refreshing={refreshing}
        onRefresh={handleRefresh}
        data={messages}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("ListItem pressed")}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => handleDelete(item)}
              />
            )}
          />
        )}
      />
    </Screen>
  );
}