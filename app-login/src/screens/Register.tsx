import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import useAuth from '../api/UserAuth';
import {styles} from './RegisterStyles'


export default function RegisterScreen({ navigation }:any) {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = async () => {
    try {
      await register(name, email, password, confirm);
      navigation.replace('Home');
    } catch (err) {
      alert(err.response?.data?.message || 'Erro ao registrar');
    }
  };

   return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirme a senha" secureTextEntry value={confirm} onChangeText={setConfirm} />

<View style={styles.button}>
      <Button title="Registrar" onPress={handleRegister} />
</View>
      <View style={{ marginTop: 10 }} />
      <View style={styles.button}>
      <Button  title="Voltar ao login" onPress={() => navigation.goBack()} />
        </View>
    </View>
  );
}
