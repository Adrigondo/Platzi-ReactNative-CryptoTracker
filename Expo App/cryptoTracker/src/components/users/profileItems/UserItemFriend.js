import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../resources/colors";
import GeneralStyles from "../../../resources/generalStyles";

class UserItemFriend extends React.Component {
  state = {
    color: "#fff",
    isPressed: false,
  }
  handlePress = () => {
    const { isPressed } = this.state;
    const { color, onPress } = this.props;
    if (!isPressed) {
      if (color) {
        this.setState({ color: color, isPressed: !isPressed});
      }
    } else {
      if (color) {
        this.setState({ color: "#fff", isPressed: !isPressed});
      }
    }
    if (onPress) {
      this.props.onPress();
    }
  }
  render() {
    const { user, icon } = this.props;
    const { color } = this.state;
    return (
      <View style={[styles.userContainer]}>
        <View style={[{flexDirection:"row", alignItems:"center"}]}>
          <View>
            <Avatar.Image
              size={40}
              source={{ uri: user.picture }}
            />
          </View>
          <View style={[{ marginLeft: 10 }]}>
            <Text style={[styles.userNames]}>
              {user.firstName} {user.lastName}
            </Text>
            <Text>
              @{user.username}
            </Text>
          </View>
        </View>
        {icon &&
        <View style={[{ marginRight: 10 }]}>
          <Pressable onPress={this.handlePress}>
            <MaterialCommunityIcons name={icon} size={20} color={color}/>
          </Pressable>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.secondaryColor,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  userNames: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserItemFriend;