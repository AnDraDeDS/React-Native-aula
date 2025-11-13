import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import axios from 'axios';
import { styles } from './CadastroStyles';  // Estilo já corrigido
import { API_BASE_URL } from '../../apiConfig';

export function Cadastro({ navigation }: any) {
  const [nome, setNome] = useState('');
  const [duracao, setDuracao] = useState('');
  const [compositor, setCompositor] = useState('');
  const [estilo, setEstilo] = useState('');

  const salvar = async () => {
    // Verifica se todos os campos estão preenchidos
    if (!nome.trim() || !duracao.trim() || !compositor.trim() || !estilo.trim()) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos!');
      return;
    }

    try {
      const payload = {
        nome: nome.trim(),
        duracao: duracao.trim(),
        compositor: compositor.trim(),
        estilo: estilo.trim(),
      };

      const headers = { 'Content-Type': 'application/json' };

      // Faz a requisição POST para salvar a música
      const response = await axios.post(`${API_BASE_URL}/api/musicas`, payload, { headers });

      // Exibe mensagem de sucesso
      Alert.alert('Sucesso', 'Música cadastrada com sucesso!');
      console.log('Música salva com sucesso!');

      // Redireciona para a página inicial
      navigation.navigate('Home');
    } catch (error: any) {
      console.log(error);
      // Exibe mensagem de erro
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar a música. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre uma nova música em sua Playlist</Text>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder='Nome da música'
        placeholderTextColor="#ffffff"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder='Duração da música (ex: 03:45:30)'
        placeholderTextColor="#ffffff"
        value={duracao}
        onChangeText={setDuracao}
      />
      <TextInput
        style={styles.input}
        placeholder='Compositor'
        placeholderTextColor="#ffffff"
        value={compositor}
        onChangeText={setCompositor}
      />
      <TextInput
        style={styles.input}
        placeholder='Estilo'
        placeholderTextColor="#ffffff"
        value={estilo}
        onChangeText={setEstilo}
      />

      <Pressable onPress={salvar} style={styles.button}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </Pressable>
    </View>
  );
}
