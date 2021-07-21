import React from "react";
import {
  View,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";

import Colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

class Searcher extends React.Component {
  state={
    query: "",
  };

  handleText = (query) => {
    this.setState({query:query});

    if(this.props.onChange){
      this.props.onChange(query);
    }
  }

  render(){
    const { query } = this.state;
    const { placeholder } = this.props;
    return(
      <TextInput
        onChangeText={this.handleText}
        value={query}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        style={[
          style.textInput,
          Platform.OS == "ios"
          ? style.textInputIOS
          : style.textInputAndroid
        ]}
      />
    );
  }
}

const style = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.secondaryColor,
    paddingHorizontal: 16,
    color: "white",
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray,
    // borderLeftWidth: 2,
    // borderLeftColor: Colors.gray,
    borderRightWidth: 2,
    borderRightColor: Colors.gray,
    margin: 8,
    borderRadius: 10,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default Searcher;
