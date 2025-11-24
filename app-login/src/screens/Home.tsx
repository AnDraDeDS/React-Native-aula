import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../api/UserAuth';

export default function HomeScreen({ navigation }: any) {
  const { getUser, logout } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser();
        console.log('Fetched user data in HomeScreen:', res.data);
        setUser(res.data);
      } catch {
        navigation.replace('Login');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    console.log('User state after fetch:', user);
  }, []);

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login');
  };

  if (loading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Bem-vindo, {user?.name || 'Usuário'}!</Text>
      <Text>Email: {user?.email}</Text>
      <View style={{ marginTop: 20 }} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
