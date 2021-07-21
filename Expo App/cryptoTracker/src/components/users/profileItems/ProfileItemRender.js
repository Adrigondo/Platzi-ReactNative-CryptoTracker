import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";

import ProfileItemUser from "./ProfileItemUser";
import ProfileItemGroup from "./ProfileItemGroup";

class ProfileItemRender extends React.Component{
  render() {
    const { item, isFriendsActive, isGroupsActive } = this.props;
    if (isFriendsActive) {
      return (<ProfileItemUser user={item}/>);
      // return (
      //   <View style={[styles.friendContainer]}>
      //     <View>
      //       <Avatar.Image
      //         size={40}
      //         source={{ uri: item.picture }}
      //       />
      //     </View>
      //     <View style={[{ marginLeft: 10 }]}>
      //       <Text>
      //         {item.firstName} {item.lastName}
      //       </Text>
      //       <Text>
      //         @{item.username}
      //       </Text>
      //     </View>
      //   </View>
      // );
    } else if (isGroupsActive) {
      return (<ProfileItemGroup group={item}/>);
      // return (
      //   <View style={[styles.friendContainer]}>
      //     <View>
      //       <Avatar.Image
      //         size={40}
      //         source={{ uri: item.picture }}
      //       />
      //     </View>
      //     <View style={[{ marginLeft: 10 }]}>
      //       <Text>
      //         {item.name}
      //       </Text>
      //     </View>
      //   </View>
      // );
    } else {
      return (null);
    }
  }
}

export default ProfileItemRender;