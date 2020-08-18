import React from 'react';

import { Container, Spinner } from './styles';

const FullPageLoader: React.FC = () => {
  return (
    <Container>
      <Spinner
        size={20}
        color={"#d13239"}
        loading={true}
      />
    </Container>
  );
}

export default FullPageLoader;