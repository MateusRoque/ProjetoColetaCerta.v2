import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, Alert } from "react-native";
import styles from "../styles/formStyles";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from "../../colors/colors";
import { StatusBar } from "expo-status-bar";
import formValidation from '../../validation';
import { AntDesign } from '@expo/vector-icons';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
  const [userEmail, setEmail] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [changeName, setNameIcon] = useState("eye");
  const [password, setPassword] = useState('');

  const handleLoginUser = async () => {
    if (!formValidation(userEmail, password, null, null, null, false)) {
      console.log("Erro na validação");
      return;
    }
    
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, userEmail, password)
        .then((userCredential) => {       
          const userId = userCredential.user.uid;
          handleLoginSuccess(userId);
        })
        .catch((error) => {
          Alert.alert("Dados inválidos", "E-mail ou senha incorretos");
        });
    } catch (error) {
      Alert.alert("Erro", "Erro ao fazer login");
    }
  };

  const handleLoginSuccess = async (userId) => {
    try {
      await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
      await AsyncStorage.setItem('userId', userId); // Opcional: Armazene o ID do usuário para personalização
      navigation.navigate('HomeScreen'); // Substitua pelo nome da tela desejada
    } catch (error) {
      console.error('Erro ao armazenar o estado de login:', error);
    }
  };

  const onForgotPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, userEmail)
      .then(() => Alert.alert("Redefinição", "Enviamos um e-mail de redefinição de senha"))
      .catch((error) => {
        Alert.alert("Dados inválidos", "E-mail inválido.");
      });
  };

  const onFooterLinkPress = () => {
    navigation.replace('Signin');
  };

  const handleEyeClick = () => {
    setHidePassword(!hidePassword);
    setNameIcon(hidePassword ? "eye-off" : "eye");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={colors.whiteF2} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
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
                <Ionicons name={changeName} color={colors.outroVerd} size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.homeButtonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleLoginUser}>
                <Text style={styles.buttonTitle}>Entrar</Text>
              </TouchableOpacity>
              <View style={styles.footerView}>
                <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                  <AntDesign name="adduser" size={24} color={colors.outroVerd}/> Cadastre-se 
                </Text>
                <View style={styles.division}/>
                <Text onPress={onForgotPassword} style={styles.footerLink}>
                  Esqueci a senha <AntDesign name="exclamationcircleo" size={24} color={colors.outroVerd}/>
                </Text>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
