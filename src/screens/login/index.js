import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Home from "../home";
import styles from "./styles";

function Login({navigation}){
  return(
    <View style={styles.container}>
      <Text>LOGIN
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text>IR PARA A HOME!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;