import React from 'react';

import { View, Text, TouchableOpacity, Image, StatusBar,} from 'react-native';

import welcomeStyles from './styles';
import colors from '../../colors/colors';

function WelcomePage({navigation}){
  return (
    <View style={welcomeStyles.container}>
      <StatusBar backgroundColor={colors.outroVerd} barStyle={'dark-content'}/> 
      <View style={welcomeStyles.imageContainer}>
        <Image source={require("../../assets/logo-sem-fundo-red.png")} style={welcomeStyles.logo}/>
      </View>
      <View style={welcomeStyles.paragraphContainer}>
        <Text style={welcomeStyles.paragraph}>Parabéns! Você está prestes a colocar a "tal sustentabilidade" na prática.</Text>

        <Text style={welcomeStyles.paragraph}>A ColetaCerta tem como objetivo
        conectar você com o município. Notificamos sobre o horário da coleta seletiva e também recebemos reclamações do município, sejam elas desobstrução de bueiros, etc...
        </Text>

        <TouchableOpacity onPress={() => {navigation.replace("Signin")}}> 
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