// FirstScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';

export function FirstScreen() {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    navigation.navigate('Home');
  }

  return (
   
    <View style={styles.container}>
       <StatusBar backgroundColor="green"/> 
      <View style={styles.imageContainer}>
        <Image source={require("../src/assets/logo-sem-fundo-red.png")} style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>Parabéns! Você está prestes a colocar a "tal sustentabilidade" na prática.</Text>

        <Text style={styles.paragraph}>A ColetaCerta tem como objetivo
        conectar você com o município. Notificamos sobre o horário da coleta seletiva e também recebemos reclamações do município, sejam elas desobstrução de bueiros, etc...
        </Text>

        <TouchableOpacity onPress={goToNextScreen}>
          <Text style={styles.paragraphLink}>
            Clique aqui para começar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
 
    )};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15

  }, 
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "blue",
  },
  paragraphContainer: {
    flex: 0.6,
    alignItems: "center",
    rowGap: 30,
    justifyContent: "center",
    
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
export default FirstScreen;