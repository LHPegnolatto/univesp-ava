import React, { useEffect, useRef } from 'react';

import { Description, GoBack } from './styles';
import { LogonHeader, LogonTitle, LogonSubtitle, LogonForm, LogonInputContainer, LogonInputLabel, LogonInput, LogonActionsContainer, LogonSubmitButton } from '../../styles/GlobalStyles';

import { useLogonContext, setPage } from '../../context/Logon';

const PasswordRecovery: React.FC = () => {
  const { email, setEmail, setPageAction, setLoadPage } = useLogonContext();

  const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    focusEmail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  function focusEmail() {
    emailInputRef.current.focus();
  }

  return (
    <>
      <LogonHeader>
        <LogonTitle>Sistema Operacional Univesp</LogonTitle>
        <LogonSubtitle>Recuperar a senha / primeiro acesso</LogonSubtitle>
      </LogonHeader>

      <LogonForm>
        <LogonInputContainer>
          <LogonInputLabel>Digite o seu e-mail UNIVESP</LogonInputLabel>
          <LogonInput
            ref={emailInputRef}
            type="email"
            placeholder="matricula@exemplo.univesp.br"
            defaultValue={email}
            onBlur={e => {
              setEmail(e.target.value);
            }}
          />
        </LogonInputContainer>

        <Description>Será enviado para o seu e-mail pessoal um link para que seja feita a redefinição da senha.</Description>
      </LogonForm>

      <LogonActionsContainer>
          <GoBack 
            onClick={() => {
              setPage(setLoadPage, setPageAction, 1);
            }}
          />

          <LogonSubmitButton 
            onClick={() => {
              setPage(setLoadPage, setPageAction, 4);

              setTimeout(() => {
                setPage(setLoadPage, setPageAction, 3);
              }, 2000);
            }}
          >
            Recuperar senha
          </LogonSubmitButton>
        </LogonActionsContainer>
    </>
  );
}

export default PasswordRecovery;