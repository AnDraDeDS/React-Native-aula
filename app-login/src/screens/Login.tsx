import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import useAuth from '../api/UserAuth';
import {styles} from './LoginStyles';

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.replace('Home');
    } catch (err) {
      console.log(err);
    }
  };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.button}>
      <Button title="Entrar" onPress={handleLogin} />
</View>
      <View style={{ marginTop: 10 }} />

    <View style={styles.button}>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Register')}
      />
      </View>
    </View>
  );
}
