import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import colors from "../../resources/colors";

import HeaderMain from "./HeaderMain";
import HeaderDetail from "./HeaderDetail";
import HeaderUser from "./HeaderUser";
import HeaderEditProfile from "./HeaderEditProfile";

const HeaderStack = ({scene, navigation }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.headerTitle;
  // const title = options.title;

  if (navigation.canGoBack()) {
    if (headerTitle == "Profile") {
      return (<HeaderUser  scene={scene} navigation={navigation} />);
    } else if (headerTitle == "Edit Profile") {
      return (<HeaderEditProfile  scene={scene} navigation={navigation} />);
    } else {
      return (<HeaderDetail  scene={scene} navigation={navigation} />);
    }
  } else {
    return (<HeaderMain  scene={scene} navigation={navigation} />);
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryColor
  },
  logo: {
    marginLeft: 5,
    borderColor: colors.primaryColor,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 2,
    marginRight: 5,
  },
});
export default HeaderStack;