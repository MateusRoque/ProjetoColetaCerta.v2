import React from "react";
import { StyleSheet } from "react-native";


const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

  }, 
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {  
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
    color: "green"
  }
})

export default welcomeStyles;