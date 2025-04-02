import React, { useReducer, ReactNode } from 'react';
import AuthContext, { AuthAction, User } from './AuthContext';

// Starea inițială
const initialState = {
  user: null,
};

// Reducer-ul care gestionează login și logout
const authReducer = (state: { user: User | null }, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload || null };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
