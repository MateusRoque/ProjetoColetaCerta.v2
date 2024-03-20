import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from "../styles/formStyles";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import colors from '../../colors/colors';
export default function Signin({ navigation }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hidePassword, setHidePassword] = useState(true);
  const [cep, setCep] = useState('');
  const [changeName, setNameIcon] = useState("eye");
  const [changeNameConfirmPwd, setNameIconConfirmPwd] = useState("eye");
  const [hidePasswordPwd, setHidePasswordPwd] = useState(true);
  const [bairro, setBairro] = useState('');

  const onFooterLinkPress = () => {
    navigation.replace('Login')
  }

  function onRegisterPress() {
    handleApi()

  }

  const handleEyeClick = () => {
    setHidePassword(!hidePassword)
    // changeColor == "#FFF" ? setColor(color) : setColor("#FFF") 
    changeName == "eye" ? setNameIcon("eye-off") : setNameIcon("eye")
  }
  const handleEyeClickConfirmPwd = () => {
    setHidePasswordPwd(!hidePasswordPwd)
    // changeColor == "#FFF" ? setColor(color) : setColor("#FFF") 
    changeNameConfirmPwd == "eye" ? setNameIconConfirmPwd("eye-off") : setNameIconConfirmPwd("eye")
  }

  async function handleApi() {
    try {
      await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json().then((json) => {
          setBairro(json.bairro)
          Alert.alert("CEP", "Bairro: " + json.bairro)
        })
        );
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor={colors.whiteF2} barStyle={'dark-content'} />

      <View style={styles.container}>
        <View style={styles.formContainer}>

          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="always">

            <Text style={styles.logo}>COLETA CERTA</Text>
            {/* <Image
                    style={styles.logo}
                    source={require("../../assets/logo-sem-fundo-red.png")}
                /> */}

            <TextInput
              style={styles.input}
              placeholder='Nome'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setFullName(text)}
              value={fullName}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder='E-mail'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setEmail(text)}
              value={email}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder='CEP'
              placeholderTextColor="#aaaaaa"
              onChangeText={(text) => setCep(text)}
              value={cep}
              underlineColorAndroid="transparent"
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

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPwd}
                placeholderTextColor="#aaaaaa"
                secureTextEntry={hidePasswordPwd}
                placeholder='Confirme a senha'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.iconEye} onPress={handleEyeClickConfirmPwd}>
                <Ionicons name={changeNameConfirmPwd} color={colors.secondary} size={25}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={onRegisterPress}>
              <Text style={styles.buttonTitle}>Cadastrar-se</Text>
            </TouchableOpacity>

            <View style={styles.footerView}>
              <Text style={styles.footerText}>Já possui uma conta? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Entre</Text></Text>
            </View>

          </KeyboardAwareScrollView>


        </View>
      </View>
    </SafeAreaView>


  )
}




