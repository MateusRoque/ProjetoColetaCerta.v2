import * as React from 'react';
import WelcomePage from './screens/welcomepage';
import Login from './screens/login';
import Signin from './screens/signin';
import Home from "./screens/home/index"
import Denuncias from "./screens/denuncias/index"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, AntDesign, FontAwesome  } from '@expo/vector-icons';
import colors from './colors/colors';
import Teste from './screens/teste';
import Teste2 from './screens/teste2';
import Account from './screens/conta';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: {
            borderTopColor: colors.whiteF2
          },
          title: 'Inicio',
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.outroVerd,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <Ionicons size={size} color={colors.outroVerd} name='home' />
            }
            return <Ionicons size={size} color={colors.dark} name='home-outline' />
          }
        }}

      />

      <Tab.Screen
        name="Teste"
        component={Teste}
        options={{
          tabBarStyle: {
            borderTopColor: colors.whiteF2
          },
          title: 'Teste1',
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.outroVerd,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <Ionicons size={size} color={colors.outroVerd} name='home' />
            }
            return <Ionicons size={size} color={colors.dark} name='home-outline' />
          }
        }}
      />

      <Tab.Screen
        name="Denuncias"
        component={Denuncias}
        options={{
          tabBarStyle: {
            borderTopColor: colors.whiteF2
          },
          title: 'Denúncia',
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.outroVerd,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <AntDesign size={size} color={colors.outroVerd} name='plus' />
            }
            return <AntDesign size={size} color={colors.dark} name='plus' />
          }
        }}
      />

      <Tab.Screen
        name="Teste2"
        component={Teste2}
        options={{
          tabBarStyle: {
            borderTopColor: colors.whiteF2
          },
          title: 'Teste2',
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.outroVerd,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <Ionicons size={size} color={colors.outroVerd} name='home' />
            }
            return <Ionicons size={size} color={colors.dark} name='home-outline' />
          }
        }}

      />
      <Tab.Screen
        name="Conta"
        component={Account}
        options={{
          tabBarStyle: {
            borderTopColor: colors.whiteF2
          },
          title: 'Conta',
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.outroVerd,
          tabBarIcon: ({ focused, size }) => {
            if (focused) {
              return <FontAwesome size={size} color={colors.outroVerd} name='user' />
            }
            return <FontAwesome size={size} color={colors.dark} name='user-o' />
          }
        }}

      />
    </Tab.Navigator>
  )
}
function Auth(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Auth;