import { useContext } from 'react';
import { AuthContext } from '../context';

// TODO: check if we want to abstract some stuff here
// maybe make the AuthProvider more lightweight?
// maybe convert it to use useReducer and make api requests here?

export const useAuth = () => useContext(AuthContext);
