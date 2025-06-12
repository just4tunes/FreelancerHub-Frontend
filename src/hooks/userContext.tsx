import React, { useState, createContext, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { User } from '../../src/utils/types/types'; // Corrected path

interface LoginData {
  token: string;
  user: User;
}

interface UserContextType {
  accessToken: string | null;
  user: User | null;
  login: (data: LoginData) => void;
  logout: () => void;
  loading: boolean;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  accessToken: null,
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const accessTokenFromCookie = Cookies.get('accessTokenBitWealth');
    const userDataFromCookie = Cookies.get('userDataBitWealth');
    console.log('UserContext: Initial - Token from cookie?', !!accessTokenFromCookie);
    if (accessTokenFromCookie && userDataFromCookie) {
      setAccessToken(accessTokenFromCookie);
      try {
        const parsedUser = JSON.parse(userDataFromCookie);
        console.log('UserContext: Initial - Parsed user data:', parsedUser);
        setUser(parsedUser as User);
      } catch (error) {
        console.error('UserContext: Initial - Error parsing user data:', error);
      }
    }
    setLoading(false);
  }, []);

  const login = (data: LoginData) => {
    const { token, user } = data;
    setAccessToken(token);
    setUser(user);
    console.log('UserContext: Login - Updating with token and user:', { token, user });
    console.log('UserContext: Login - Current accessToken:', accessToken); // Debug current state

    Cookies.set('accessTokenBitWealth', token, {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
    });

    Cookies.set('userDataBitWealth', JSON.stringify(user), {
      expires: 7,
      secure: true,
      sameSite: 'Strict',
    });
  };

  const logout = () => {
    setAccessToken(null);
    setUser(null);
    Cookies.remove('accessTokenBitWealth');
    Cookies.remove('userDataBitWealth');
    console.log('UserContext: Logged out');
  };

  return (
    <UserContext.Provider value={{ accessToken, user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;