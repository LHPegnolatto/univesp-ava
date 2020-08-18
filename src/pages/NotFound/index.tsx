import React from 'react';

import { Container, Exclamation, MessageContainer, Message } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Exclamation />
      <MessageContainer>
        <Message>Not</Message>
        <Message>Found</Message>
      </MessageContainer>
    </Container>
  );
}

export default NotFound;