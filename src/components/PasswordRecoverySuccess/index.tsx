import React from 'react';

import { Header, Title, Subtitle, Content, SuccessIcon, Description, ActionsContainer, SubmitButton } from './styles';

import { useLogonContext, setPage } from '../../context/Logon';

const PasswordRecoverySuccess: React.FC = () => {
  const { setPageAction, setLoadPage } = useLogonContext();

  return (
    <>
      <Header>
        <Title>Sistema Operacional Univesp</Title>
        <Subtitle>Recuperar a senha / primeiro acesso</Subtitle>
      </Header>

      <Content>
        <SuccessIcon />

        <Description>Foi enviado para o seu e-mail pessoal um link para que seja feita a redefinição da senha.</Description>
      </Content>

      <ActionsContainer>
          <SubmitButton 
            onClick={() => {
              setPage(setLoadPage, setPageAction, 1)
            }}
          >
            Confirmar
          </SubmitButton>
        </ActionsContainer>
    </>
  );
}

export default PasswordRecoverySuccess;