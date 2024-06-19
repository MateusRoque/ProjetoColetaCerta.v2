import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, Image, StatusBar, } from 'react-native';
import welcomeStyles from './styles';
import colors from '../../colors/colors';

function WelcomePage({ navigation }) {
  useEffect(() => {
    async function checkLogin() {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          // Usuário está logado, navegue para a tela escolhida
          navigation.replace('HomeScreen'); // Substitua pelo nome da tela desejada
        }
      } catch (error) {
        console.error('Erro ao verificar o estado de login:', error);
      }
    }

    checkLogin();
  }, [navigation]);
  return (
    <View style={welcomeStyles.container}>
      <StatusBar backgroundColor={colors.whiteF2} barStyle={'dark-content'} />
      <View style={welcomeStyles.imageContainer}>
        <Image source={require("../../assets/logo-sem-fundo-red.png")} style={welcomeStyles.logo} />
      </View>
      <View style={welcomeStyles.paragraphContainer}>
        <Text style={welcomeStyles.paragraph}>Parabéns! Você está prestes a colocar a "tal sustentabilidade" na prática.</Text>

        <Text style={welcomeStyles.paragraph}>A ColetaCerta tem como objetivo
          conectar você com o município. Notificamos sobre o horário da coleta seletiva e também recebemos reclamações do município, sejam elas desobstrução de bueiros, etc...
        </Text>

        <TouchableOpacity onPress={() => { navigation.replace("Signin") }}>
          <Text style={welcomeStyles.paragraphLink}>
            Clique aqui para começar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default WelcomePage;

/* onPress={goToNextScreen} */