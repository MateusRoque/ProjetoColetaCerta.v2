import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';
import homeStyles from './styles';
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import colors from '../../colors/colors';

  
const Home = () => {
  return(  
  <SafeAreaView  style={homeStyles.safe}>
    <StatusBar backgroundColor={colors.whiteF2}/>
    <View style={homeStyles.container}>
    
        <Text>
          Home aqui asdasd
        </Text>
      
    </View>
    </SafeAreaView>
  );
}

export default Home;