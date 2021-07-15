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

const MainHeader = ({scene, navigation }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.headerTitle;

  return ( 
    <Appbar.Header style={headerStyles.header}>
      <MaterialCommunityIcons
        name="bitcoin"
        size={40}
        color={colors.yellow}
        style={headerStyles.logo}
      />
      <Appbar.Content
        title={headerTitle}
      />
      <Pressable
        onPress={()=>navigation.navigate("Profile")}
      >
        <Image
          style={headerStyles.profileImage}
          source={{uri: "https://gravatar.com/avatar/74b143021b70bb936f4edbc9e11ecb1b?d=identicon"}}
        />
      </Pressable>
    </Appbar.Header>
  );
}

export default MainHeader;