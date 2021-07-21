import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

import colors from "../../../resources/colors";
import GeneralStyles from "../../../resources/generalStyles";

class ProfileItemUser extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <View style={[styles.userContainer]}>
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
    );
  }
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
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

export default ProfileItemUser;