import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../colors/colors";
import { StatusBar } from "expo-status-bar";

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    paddingTop: StatusBar.currentHeight 
  }, 
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  paragraphContainer: {
    flex: 0.6,
    alignItems: "center",
    rowGap: 30,
    justifyContent: "center",
    width: "100%",
  },
  paragraph: {
    fontSize: 18,
    width:300,
    textAlign: 'justify',
  },
  paragraphLink: {
    fontSize: 19,
    fontWeight: "bold",
    color: colors.outroVerd
  }
})

export default welcomeStyles;