import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function Login({navigation}){
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [changeColor, setColor] = useState("#FFF");
  const [changeName, setNameIcon] = useState("eye");
  const [password, setPassword] = useState('')

  const color = "black";

  const handleLoginUser = () => {
    // Fazer a validação,
    return navigation.replace('HomeScreen');
  }

  const onFooterLinkPress = () => {
    navigation.replace('Signin')

  }
  const handleEyeClick = () => {
    setHidePassword(!hidePassword)
    // changeColor == "#FFF" ? setColor(color) : setColor("#FFF") 
    changeName == "eye" ? setNameIcon("eye-off") : setNameIcon("eye")
  }
  return(
    <View style={styles.container}>
      <View style={styles.loginContainer}>    
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always">
          <Image
              style={styles.logo}
              source={require("../../assets/logo-sem-fundo-red.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={userName}
            placeholder="Insira seu nome"
            placeholderTextColor={"#aaaaaa"}
          />
        
          <TextInput
            style={styles.input}
            placeholder="Insira seu e-mail"
            placeholderTextColor={"#aaaaaa"}
            value={userEmail}
            onChangeText={(text) => setEmail(text)}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputPwd}
              placeholder="Insira sua senha"
              placeholderTextColor={"#aaaaaa"}
              secureTextEntry={hidePassword}
              onChangeText={(text) => setPassword(text)}
              value={password}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.iconEye}  onPress={handleEyeClick}>
              <Ionicons name={changeName} color={color} size={25}
              />
            </TouchableOpacity>
          </View>      
        
          <View style={styles.homeButtonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleLoginUser}>
                <Text style={styles.buttonTitle}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Não tem uma conta? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Cadastre-se</Text></Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      
    </View>
  );
}

export default Login;