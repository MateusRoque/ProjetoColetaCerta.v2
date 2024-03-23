import React, { useState } from 'react';
import { Button, SafeAreaView, Text, View} from 'react-native';
import homeStyles from './styles';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import colors from '../../colors/colors';

  
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  function click(){
    setIsLoading(true)
    console.log("click")
  }
  return(  
  <SafeAreaView  style={homeStyles.safe}>
    <StatusBar backgroundColor={colors.whiteF2}/>
    <View style={homeStyles.container}>
    
        <Text>
          Home aqui asdasd
        </Text>
      <Button title='Clique' isLoading={isLoading} onPress={click}/>
    </View>
    </SafeAreaView>
  );
}

export default Home;