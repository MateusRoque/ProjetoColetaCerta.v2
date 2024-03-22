import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, Alert } from "react-native";
import styles from "../styles/formStyles";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from "../../colors/colors";
import { StatusBar } from "expo-status-bar";
import formValidation from '../../validation';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {
  const [userEmail, setEmail] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [changeColor, setColor] = useState("#FFF");
  const [changeName, setNameIcon] = useState("eye");
  const [password, setPassword] = useState('')

  const handleLoginUser = () => {
    if (!formValidation(userEmail, password, null, null, null, false)) {
      return console.log("Erro na validação")
    }
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, userEmail, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
          navigation.replace('HomeScreen');
        })
        .catch((error) => {
          Alert.alert("Dados inválidos", "E-mail ou senha incorretos")
        });
    } catch (error) {
      Alert.alert("Dados inválido", "Usuário inexistente");
    }

  }

  const onFooterLinkPress = () => {
    navigation.replace('Signin')

  }
  const handleEyeClick = () => {
    setHidePassword(!hidePassword)
    // changeColor == "#FFF" ? setColor(color) : setColor("#FFF") 
    changeName == "eye" ? setNameIcon("eye-off") : setNameIcon("eye")
  }
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={colors.whiteF2} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always">
            <Text style={styles.logo}>COLETA CERTA</Text>

            <TextInput
              style={styles.input}
              placeholder="Insira seu e-mail"
              placeholderTextColor={"#aaaaaa"}
              value={userEmail}
              onChangeText={(text) => setEmail(text)}
              keyboardType='email-address'

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
              <TouchableOpacity style={styles.iconEye} onPress={handleEyeClick}>
                <Ionicons name={changeName} color={colors.outroVerd} size={25}
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
    </SafeAreaView>
  );
}

export default Login;