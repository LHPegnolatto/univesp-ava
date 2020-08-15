import React, { createContext, useContext, Dispatch, SetStateAction } from 'react';

import usePersistedState from '../utils/usePersistedState';

interface AuthContextProps {
  isAuthenticated: boolean,
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = usePersistedState<boolean>('isAuthenticated', false);

  return (
    <AuthContext.Provider 
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if(!context) throw new Error('useAuthContext must be used within a AuthProvider.');

  return context;
}