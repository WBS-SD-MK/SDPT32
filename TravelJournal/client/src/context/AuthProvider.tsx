import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from '.';
import { login, me, logout, register, refresh } from '@/data';
import type { User, LoginData, RegisterData, AuthContextType } from '@/types';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [checkSession, setCheckSession] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const refreshAndStore = async () => {
        const { accessToken } = await refresh();
        localStorage.setItem('accessToken', accessToken);
      };

      const fetchProfile = async () => {
        const data = await me();
        setUser(data);
        setSignedIn(true);
      };

      try {
        if (!localStorage.getItem('accessToken')) {
          await refreshAndStore();
        }

        await fetchProfile();
      } catch (error) {
        console.error(error);
        try {
          await refreshAndStore();
          await fetchProfile();
        } catch (refreshError) {
          console.error(refreshError);
          localStorage.removeItem('accessToken');
          setSignedIn(false);
          setUser(null);
        }
      } finally {
        setCheckSession(false);
      }
    };

    if (checkSession) getUser();
  }, [checkSession]);

  const handleSignIn = async ({ email, password }: LoginData) => {
    const { accessToken } = await login({ email, password });
    localStorage.setItem('accessToken', accessToken);
    setCheckSession(true);
  };

  const handleRegister = async (formState: RegisterData) => {
    const { accessToken } = await register(formState);
    localStorage.setItem('accessToken', accessToken);
    setCheckSession(true);
  };

  const handleSignOut = async () => {
    await logout();
    localStorage.removeItem('accessToken');
    setSignedIn(false);
    setUser(null);
  };

  const value: AuthContextType = {
    signedIn,
    user,
    handleSignIn,
    handleSignOut,
    handleRegister,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
