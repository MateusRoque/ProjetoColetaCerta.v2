import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const denunciaStyles = StyleSheet.create({
  conteiner: {
    height:"100vh",
    alignItems: "center",
    justifyContent:"cente",
    flexDirection: "column",
    padding: 15,
    backgroundColor: colors.white,
  },
  conteinerLogo: {
    marginTop: 20,
    width: "70%",
    alignItems:"center"
  },
  imageLogo: {
    resizeMode: "contain",
    width:"80%"
  },
  text: {
    fontSize: 19,
    padding: 20,
  },
  styleInput: {
    width: "100%",
    gap: 15,
  },
  button: {
    padding: 15,
    backgroundColor: "#55a630",
    borderRadius: 6,
    marginBottom:"10px"
  }
});

export default denunciaStyles;