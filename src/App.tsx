import React from 'react';

import AuthProvider from './context/Auth';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <AuthProvider>
      <Routes />

      <GlobalStyles />
    </AuthProvider>
  );
}

export default App;
