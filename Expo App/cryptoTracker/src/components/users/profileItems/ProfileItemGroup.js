import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../resources/colors";
import GeneralStyles from "../../../resources/generalStyles";

class ProfileItemGroup extends React.Component {
  state = {
    isListActive: false,
  };
  handleList = (selected) => {
    const { isListActive } = this.state;
    this.setState({
      isListActive: !isListActive,
    });
  }
  render() {
    const { group } = this.props;
    const { isListActive } = this.state;
    // console.log(group);
    return (
      <View>
        <Pressable
          style={[styles.groupContainer]}
          onPress={this.handleList}
        >
          <View style={[{flexDirection:"row", alignItems: "center",}]}>
            <View>
              <Avatar.Image
                size={45}
                source={{ uri: group.picture }}
              />
            </View>
            <View style={[{ marginLeft: 10 }]}>
            <Text style={[styles.groupTitle]}>
                {group.name}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable>
              <MaterialCommunityIcons name="pencil-outline" size={20} color="#fff"
                style={{marginRight:10}}
              />
            </Pressable>
            <MaterialCommunityIcons name="chevron-down" size={30} color="#fff"/>
          </View>
        </Pressable>
        <FlatList
          style={
            isListActive?
              styles.listMemberContainer
            : null
          }
          data={
            isListActive?
              group.members
            : null
          }
          keyExtractor={
            isListActive?
              (item) => item.username.toString()
            : null
          }
          renderItem={({ item }) => {
            if (isListActive) {
              return (
                <View style={styles.memberContainer}>
                  <View>
                    <Avatar.Image
                      source={{ uri: item.picture }}
                      size={25}
                    />
                  </View>
                  <View style={styles.memberTextContainer}>
                    <Text>{item.firstName} {item.lastName}</Text>
                    <Text style={styles.memberUsername}>@{item.username}</Text>
                  </View>
                </View>
              );
            } else {
              return null;
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.secondaryColor,
    borderRadius: 100,
    padding: 12,
    marginBottom: 5,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listMemberContainer: {
    marginBottom: 10,
  },
  memberContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    paddingBottom: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryColor,
  },
  memberTextContainer: {
    flexDirection: "row",
    marginLeft: 5,
    alignItems: "center",
  },
  memberUsername: {
    fontSize: 12,
    color: "#777",
    marginLeft: 5,
  },
});

export default ProfileItemGroup;