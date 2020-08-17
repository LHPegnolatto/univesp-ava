import React from 'react';
import { Transition } from 'react-transition-group';

import Login from '../../components/Login';
import PasswordRecovery from '../../components/PasswordRecovery';
import PasswordRecoverySuccess from '../../components/PasswordRecoverySuccess';
import LogonLoading from '../../components/LogonLoading';

import { useLogonContext } from '../../context/Logon'

import { Container, Card } from './styles';

const LogonPage: React.FC = () => {
  const { pageAction, loadPage } = useLogonContext();

  let Page = {} as React.FC;

  switch(pageAction) {
    case 1:
      Page = Login;
      break;
    case 2:
      Page = PasswordRecovery;
      break;
    case 3:
      Page = PasswordRecoverySuccess;
      break;
    case 4:
      Page = LogonLoading;
      break;
    default:
      Page = Login;
      break;
  }

  const duration = 100;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    zIndex: 2
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };

  return (
      <Transition
        in={loadPage}
        appear={true}
        timeout={100}
        mountOnEnter
        unmountOnExit
      >
        {state => (
          <Card>
            <Container 
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <Page />
            </Container>
          </Card>
        )}
      </Transition>
    
  );
}

export default LogonPage;