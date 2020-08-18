import React from 'react';

import { SuccessIcon, Description, ActionsContainer } from './styles';
import { LogonHeader, LogonTitle, LogonSubtitle, LogonForm, LogonSubmitButton } from '../../styles/GlobalStyles';

import { useLogonContext, setPage } from '../../context/Logon';

const PasswordRecoverySuccess: React.FC = () => {
  const { setPageAction, setLoadPage } = useLogonContext();

  return (
    <>
      <LogonHeader>
        <LogonTitle>Sistema Operacional Univesp</LogonTitle>
        <LogonSubtitle>Recuperar a senha / primeiro acesso</LogonSubtitle>
      </LogonHeader>

      <LogonForm>
        <SuccessIcon />

        <Description>Foi enviado para o seu e-mail pessoal um link para que seja feita a redefinição da senha.</Description>
      </LogonForm>

      <ActionsContainer>
        <LogonSubmitButton 
          onClick={() => {
            setPage(setLoadPage, setPageAction, 1)
          }}
        >
          Confirmar
        </LogonSubmitButton>
      </ActionsContainer>
    </>
  );
}

export default PasswordRecoverySuccess;