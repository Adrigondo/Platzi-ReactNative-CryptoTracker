import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";

import colors from "../../resources/colors";

import MainHeader from "./MainHeader";
import DetailHeader from "./DetailHeader";
import UserHeader from "./UserHeader";

const StackHeader = ({scene, navigation }) => {
  const { options } = scene.descriptor;
  const headerTitle = options.headerTitle;
  // const title = options.title;

  if (navigation.canGoBack()) {
    if (headerTitle == "Profile") {
      return (<UserHeader  scene={scene} navigation={navigation} />);
    } else {
      return (<DetailHeader  scene={scene} navigation={navigation} />);
    }
  } else {
    return (<MainHeader  scene={scene} navigation={navigation} />);
  }

  /* return ( 
    <Appbar.Header style={styles.header}>
      {
        navigation.canGoBack() ?
          (
            <Appbar.BackAction
              onPress={ ()=>navigation.pop() }
            />
          )
        : (
            <MaterialCommunityIcons name="bitcoin" size={40} color={colors.yellow} style={styles.logo}/>
        )
      }
      <Appbar.Content
        title={
          title
            ? title
            : headerTitle
        }
      />
      {
        !navigation.canGoBack() &&
        <Pressable
          onPress={()=>navigation.navigate("Profile")}
        >
          <Image
            style={styles.profileImage}
            source={{uri: "https://gravatar.com/avatar/74b143021b70bb936f4edbc9e11ecb1b?d=identicon"}}
          />
        </Pressable>
      }
    </Appbar.Header>
  ); */
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
export default StackHeader;