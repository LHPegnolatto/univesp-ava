import React, { useState, useEffect, useRef } from 'react';

import { ButtonInputContainer, Eye, EyeSlash, Recovery } from './styles';
import { LogonHeader, LogonTitle, LogonSubtitle, LogonForm, LogonInputContainer, LogonInputLabel, LogonInput, LogonActionsContainer, LogonSubmitButton } from '../../styles/GlobalStyles';

import { useAuthContext } from '../../context/Auth';
import { useLogonContext, setPage } from '../../context/Logon';

const Login: React.FC = () => {
  const { setIsAuthenticated } = useAuthContext();
  const { email, setEmail, setPageAction, setLoadPage } = useLogonContext();

  const [showPassword, setShowPassword] = useState(false);

  const emailInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if(!email)
      focusEmail();
    else
      focusPassword();
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
    setPage(setLoadPage, setPageAction, 4);

    setTimeout(() => {
      setIsAuthenticated(true);
    }, 2000);
  }

  function handlePasswordRecovery() {
    setPage(setLoadPage, setPageAction, 2);
  }

  return (
    <>
      <LogonHeader>
        <LogonTitle>Sistema Operacional Univesp</LogonTitle>
        <LogonSubtitle>Login</LogonSubtitle>
      </LogonHeader>

      <LogonForm>
        <LogonInputContainer>
          <LogonInputLabel>Digite o seu e-mail UNIVESP</LogonInputLabel>
          <LogonInput
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
        </LogonInputContainer>

        <LogonInputContainer>
          <LogonInputLabel>Digite a sua senha</LogonInputLabel>
          <ButtonInputContainer>
            <LogonInput
              ref={passwordInput}
              placeholder={showPassword ? 'exemplo' : '•••••••'}
              type={showPassword ? 'text' : 'password'}
              onKeyPress={e => { 
                if (e.charCode === 13)
                  handleLogin();
              }}
            />
            {showPassword ? <EyeSlash onClick={toggleShowPassword} /> : <Eye onClick={toggleShowPassword} />}
          </ButtonInputContainer>
        </LogonInputContainer>
      </LogonForm>

      <LogonActionsContainer>
        <Recovery onClick={handlePasswordRecovery}>Esqueci a senha / Primeiro acesso</Recovery>

        <LogonSubmitButton onClick={handleLogin}>Entrar</LogonSubmitButton>
      </LogonActionsContainer>
    </>
  );
}

export default Login;