import React from "react";
// import {
//   View,
//   Image,
//   StyleSheet,
//   Pressable,
// } from "react-native";
import { Appbar } from "react-native-paper";

import headerStyles from "../../resources/headerStyles";

const DetailHeader = ({scene, navigation }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.headerTitle;
  // const title = options.title;
  // console.log(options);

  return ( 
    <Appbar.Header style={headerStyles.header}>
      <Appbar.BackAction
        onPress={ ()=>navigation.pop() }
      />
      <Appbar.Content
        title={headerTitle}
      />
      <Appbar.Action
        icon="account-edit"
        color="white"
      />
      <Appbar.Action
        icon="dots-vertical"
        color="white"
      />
    </Appbar.Header>
  );
}

export default DetailHeader;