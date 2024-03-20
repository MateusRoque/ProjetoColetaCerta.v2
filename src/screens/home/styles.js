import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white

  },
  safe: {
    height: "100%",
    backgroundColor: colors.whiteF2
  }
})

export default homeStyles;