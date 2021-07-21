import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Appbar, Colors } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../resources/colors";
import headerStyles from "../../resources/headerStyles";

const DetailHeader = ({scene, navigation }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.headerTitle;
  const title = options.title;
  // console.log(options);

  return ( 
    <Appbar.Header style={headerStyles.header}>
      <Appbar.BackAction
        onPress={ ()=>navigation.pop() }
      />
      <Appbar.Content
        title={
          title
            ? title
            : headerTitle
        }
      />
    </Appbar.Header>
  );
}

export default DetailHeader;