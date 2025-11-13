import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import styles from './HomeStyles';
import axios from 'axios';

interface Musica {
  id: number;
  nome: string;
  compositor: string;
  duracao: string;
}

function useBandData() {
  const [musicas, setMusicas] = useState<Musica[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use o IP da sua máquina na rede local aqui
        const response = await axios.get<Musica[]>('http://127.0.0.1:8000/api/musicas');
        setMusicas(response.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { musicas, loading };
}

export function Home() {
  const { musicas, loading } = useBandData();

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#3057f3" />
        <Text style={{ marginTop: 10 }}>Carregando músicas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 Lista de Músicas</Text>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>#{item.id}</Text>
            <View style={{ flex: 1, justifyContent: 'space-evenly', marginLeft: 10 }}>
              <Text style={[styles.nome, { fontWeight: 'bold' }]}>{item.nome}</Text>
              <Text style={styles.nome}>{item.compositor}</Text>
            </View>
            <View>
              <Text style={styles.nome}>{item.duracao}</Text>
            </View>
            <Ionicons name="play-circle" size={30} style={{ marginLeft: 10, color: '#3057f3ff' }} />
          </View>
        )}
      />
    </View>
  );
}
