import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './Api';

export default function useAuth() {
  const [user, setUser] = useState(null);

  const register = async (name: string, email: string, password: string, password_confirmation: string) => {
    const res = await api.post('/register', { name, email, password, password_confirmation });
    await AsyncStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  };

  const login = async (email: string, password: string) => {
    const res = await api.post('/login', { email, password });
    console.log('Response data:', JSON.stringify(res.data, null, 2));
    const { token, user } = res.data;
    await AsyncStorage.setItem('token', res.data.token);
     await AsyncStorage.setItem('user', JSON.stringify(user));
    setUser(res.data.user);
    return { token, user };
  };

  const getUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) throw new Error('Token não encontrado');

      const res = await api.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // 🔥 Retorna a resposta para poder acessar res.data no componente
      return res;
    } catch (err) {
      console.error('Erro ao buscar usuário:', err);
      throw err;
    }
  };

  const logout = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) throw new Error('Token não encontrado');

        await api.post('/logout', {}, {
            headers: { Authorization: `Bearer ${token}` },
        });

        await AsyncStorage.removeItem('token');
        setUser(null);
    } catch (err) {
        console.error('Erro ao deslogar:', err);
        throw err;
    }
};


  return { user, register, login, getUser, logout };
}