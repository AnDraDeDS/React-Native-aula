import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import useAuth from '../api/UserAuth';

export default function HomeScreen({ navigation }: any) {
    interface User {
        id: number;
        name: string;
        email: string;
    }

    const { getUser, logout } = useAuth();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUser();
                console.log('Fetched user:', userData.data);
                setUser(userData.data);
            } catch (error) {
                console.error(error);
                navigation.replace('Login');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        await logout();
        navigation.replace('Login');
    };

    if (loading) return <Text>Carregando...</Text>;

    return (
        <View>
            <Text>Bem-vindo, {user?.name || 'Usuário'}!</Text>
            <Text>Email: {user?.email}</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}
