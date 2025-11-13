// src/screens/Inicio.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './InicioStyles';

export function Inicio() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>

      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Ir para Home</Text>
      </Pressable>

      <Pressable 
        style={styles.button} 
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>Ir para Cadastro</Text>
      </Pressable>
    </View>
  );
}
