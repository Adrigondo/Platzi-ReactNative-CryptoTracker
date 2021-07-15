import { StyleSheet } from "react-native";

import colors from "./colors";

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

export default styles;