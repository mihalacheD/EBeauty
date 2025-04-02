import { createContext } from 'react';

export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface AuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: User;
}

export interface AuthContextType {
  user: User | null;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  dispatch: () => {},
});

export default AuthContext;
