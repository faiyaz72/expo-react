import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "../AppText/AppText";
import Colors from "../../config/Colors";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function ListItem({
  title,
  subTitle,
  image = null,
  IconComponent,
  onPress,
  renderRightActions,
}: {
  title: string;
  subTitle?: string;
  image?: any;
  IconComponent?: React.ReactNode;
  onPress?: () => void;
  renderRightActions?: () => React.ReactNode;
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions || undefined}
    >
      <TouchableHighlight onPress={onPress} underlayColor={Colors.light}>
        <View style={styles.container}>
          {image && <Image source={image} style={styles.image} />}
          {IconComponent && IconComponent}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: Colors.medium,
  },
  delete: {
    backgroundColor: Colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: Colors.white,
  },
});
