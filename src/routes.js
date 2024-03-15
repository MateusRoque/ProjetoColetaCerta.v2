import * as React from 'react';
import WelcomePage from './screens/welcomepage';
import Login from './screens/login';
import Signin from './screens/signin';
import Home from "./screens/home/index"
import Denuncias from "./screens/denuncias/index"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
      name="Home"
      component={Home}
      options={{ 
        title: 'Inicio',
        tabBarIcon: ({focused, size, color}) => {
          if(focused){
            return <Ionicons size={size} color={color} name='home'/>
          } 
          return <Ionicons size={size} color={color} name='home-outline'/>
        }
        }}

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
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Auth;