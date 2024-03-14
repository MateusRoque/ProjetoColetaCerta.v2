import * as React from 'react';
import WelcomePage from '../screens/welcomepage';
import Login from '../screens/login';
import Home from "../screens/home/index"
import Denuncias from "../screens/denuncias/index"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(){
  return(
    <Tab.Navigator>
      <Tab.Screen
      name="Home"
      component={Home}
      options={{ title: 'Inicio'}}
    />
    <Tab.Screen
      name="Denuncias"
      component={Denuncias}
      options={{title: 'Fazer denuncia'}}
    />
    </Tab.Navigator>
  )
}
function Auth(props){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomePage" component={WelcomePage}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Denuncias" component={Denuncias}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Auth;