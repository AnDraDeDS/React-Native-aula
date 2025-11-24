import { useState } from 'react';
import api from './Api';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const register = async (name, email, password, password_confirmation) => {
    const res = await api.post('/register', {
      name, email, password, password_confirmation
    });

    setToken(res.data.token);
    setUser(res.data.user);
  };

  const login = async (email, password) => {
    const res = await api.post('/login', { email, password });
    
    setToken(res.data.token);
    setUser(res.data.user);

    return res.data;
  };

  const getUser = async () => {
    const res = await api.get('/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  };

  const logout = async () => {
    await api.post('/logout', {}, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setToken(null);
    setUser(null);
  };

  return { user, token, register, login, getUser, logout };
}
