import React, { createContext, useContext, useState, useEffect } from 'react';
import { verifyAppToken, JWTPayload } from '../utils/jwt';

interface AuthContextType {
  user: JWTPayload | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  verifyToken: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<JWTPayload | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for token in localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      login(storedToken).catch(() => {
        // Token was invalid
        localStorage.removeItem('auth_token');
      });
    }
    setIsLoading(false);
  }, []);

  const login = async (newToken: string) => {
    try {
      setIsLoading(true);
      // Verify token
      const payload = await verifyAppToken(newToken);
      setToken(newToken);
      setUser(payload);
      localStorage.setItem('auth_token', newToken);
      localStorage.setItem('user_data', JSON.stringify(payload));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
  };

  const verifyToken = async (): Promise<boolean> => {
    if (!token) return false;
    try {
      const payload = await verifyAppToken(token);
      setUser(payload);
      return true;
    } catch (error) {
      logout();
      return false;
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!token && !!user,
    login,
    logout,
    verifyToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
