import React from 'react';

import { Container, Spinner } from './styles';

const LogonLoading: React.FC = () => {
  return (
    <Container>
      <Spinner
        size={12}
        color={"#d13239"}
        loading={true}
      />
    </Container>
  );
}

export default LogonLoading;