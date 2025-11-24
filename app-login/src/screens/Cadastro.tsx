import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import useAuth from '../api/UserAuth';

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
      //alert(err.response?.data?.message || 'Erro ao registrar');
    }
  };

  return (
    <View>
      <Text>Criar Conta</Text>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput placeholder="Confirme a senha" secureTextEntry value={confirm} onChangeText={setConfirm} />
      <Button title="Registrar" onPress={handleRegister} />
      <View style={{ marginTop: 10 }} />
      <Button title="Voltar ao login" onPress={() => navigation.goBack()} />
    </View>
  );
}
