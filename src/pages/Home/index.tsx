import React from 'react';

import { Container, LogoffButton } from './styles';

import { useAuthContext } from '../../context/Auth';

const Home: React.FC = () => {
  const { setIsAuthenticated } = useAuthContext();

  function handleLogoff() {
    setIsAuthenticated(false);
  }

  return (
    <Container>
      <LogoffButton
        onClick={handleLogoff}
      />
    </Container>
  );
}

export default Home;