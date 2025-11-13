import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Inicio } from '../screens/Inicio';
import { Home } from '../screens/Home';
import { Cadastro } from '../screens/Cadastro';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
      
        headerStyle: {
          backgroundColor: '#514B4B', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerTitleAlign: 'left',
         
      }}
       initialRouteName="Inicio"
    >
      <Screen 
        name="Inicio" 
        component={Inicio} 
        options={{ headerShown: false }}
      />

      <Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Lista de Músicas' }}
      />

      <Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ title: 'Cadastrar Música' }}
      />
    </Navigator>
  );
}
