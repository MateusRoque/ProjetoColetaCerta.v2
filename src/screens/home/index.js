import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import homeStyles from './styles';
import 'react-native-gesture-handler'

  
const Home = () => {
  // const navigation = useNavigation();

  // const goToNextScreen = () => {
  // navigation.navigate('Denuncias')
  // }
  
  return(
    <View style={homeStyles.container}>
      <Text>
        Home aqui
      </Text>
    </View>
  );
}

export default Home;