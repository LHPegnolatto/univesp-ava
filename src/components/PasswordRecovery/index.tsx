import React, { useEffect, useRef } from 'react';

import { Header, Title, Subtitle, Form, InputContainer, InputLabel, Input, Description, ActionsContainer, GoBack, SubmitButton } from './styles';

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
      <Header>
        <Title>Sistema Operacional Univesp</Title>
        <Subtitle>Recuperar a senha / primeiro acesso</Subtitle>
      </Header>

      <Form>
        <InputContainer>
          <InputLabel>Digite o seu e-mail UNIVESP</InputLabel>
          <Input
            ref={emailInputRef}
            type="email"
            placeholder="matricula@exemplo.univesp.br"
            defaultValue={email}
            onBlur={e => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>

        <Description>Será enviado para o seu e-mail pessoal um link para que seja feita a redefinição da senha.</Description>
      </Form>

      <ActionsContainer>
          <GoBack 
            onClick={() => {
              setPage(setLoadPage, setPageAction, 1);
            }}
          />

          <SubmitButton 
            onClick={() => {
              setPage(setLoadPage, setPageAction, 4);

              setTimeout(() => {
                setPage(setLoadPage, setPageAction, 3);
              }, 2000);
            }}
          >
            Recuperar senha
          </SubmitButton>
        </ActionsContainer>
    </>
  );
}

export default PasswordRecovery;