import { useContext } from 'react';
import AuthContext from '../state-managment/AuthContext';

export const useAuth = () => {
  return useContext(AuthContext);
};
