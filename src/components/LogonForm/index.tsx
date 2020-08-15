import React, { useState, useEffect, useRef } from 'react';

import { Container, Header, Title, Subtitle, Form, InputContainer, InputLabel, Input, ButtonInputContainer, Eye, EyeSlash, ActionsContainer, Recovery, SubmitButton } from './styles';

import { useAuthContext } from '../../context/Auth';
import { useLogonContext, setPage } from '../../context/Logon';

const LogonForm: React.FC = () => {
  const { setIsAuthenticated } = useAuthContext();
  const { email, setEmail, setPageAction, setLoadPage } = useLogonContext();

  const [showPassword, setShowPassword] = useState(false);

  const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    focusEmail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  function toggleShowPassword() {
    setShowPassword(!showPassword);

    setTimeout(() =>  focusPassword(), 10)
  }

  function focusEmail() {
    emailInputRef.current.focus();
  }

  function focusPassword() {
    passwordInput.current.focus();
  }

  function handleLogin() {
    setIsAuthenticated(true);
  }

  function handlePasswordRecovery() {
    setPage(setLoadPage, setPageAction, 2);
  }

  return (
    <Container>
      <Header>
        <Title>Sistema Operacional Univesp</Title>
        <Subtitle>Login</Subtitle>
      </Header>

      <Form>
        <InputContainer>
          <InputLabel>Digite o seu e-mail UNIVESP</InputLabel>
          <Input
            ref={emailInputRef}
            type="email"
            placeholder="matricula@exemplo.univesp.br"
            defaultValue={email}
            onKeyPress={e => { 
              if (e.charCode === 13)
                focusPassword();
            }}
            onBlur={e => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Digite a sua senha</InputLabel>
          <ButtonInputContainer>
            <Input
              ref={passwordInput}
              placeholder={showPassword ? 'exemplo' : '•••••••'}
              type={showPassword ? 'text' : 'password'}
            />
            {showPassword ? <EyeSlash onClick={toggleShowPassword} /> : <Eye onClick={toggleShowPassword} />}
          </ButtonInputContainer>
        </InputContainer>
      </Form>

      <ActionsContainer>
        <Recovery onClick={handlePasswordRecovery}>Esqueci a senha / Primeiro acesso</Recovery>

        <SubmitButton onClick={handleLogin}>Entrar</SubmitButton>
      </ActionsContainer>
    </Container>
  );
}

export default LogonForm;