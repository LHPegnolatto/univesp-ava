import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';
import { Transition } from 'react-transition-group';

import LogonForm from '../components/LogonForm';
import PasswordRecovery from '../components/PasswordRecovery';
import PasswordRecoverySuccess from '../components/PasswordRecoverySuccess';

interface LogonContextProps {
  email: string,
  setEmail: Dispatch<SetStateAction<string>>,
  pageAction: number,
  setPageAction: Dispatch<SetStateAction<number>>,
  loadPage: boolean,
  setLoadPage: Dispatch<SetStateAction<boolean>>
}

const LogonContext = createContext<LogonContextProps>({} as LogonContextProps);

export default function LogonProvider({ children }) {
  const [email, setEmail] = useState<string>('');
  const [pageAction, setPageAction] = useState<number>(1);
  const [loadPage, setLoadPage] = useState<boolean>(true);

  const values = {
    email,
    setEmail,
    pageAction,
    setPageAction,
    loadPage,
    setLoadPage
  }

  return (
    <LogonContext.Provider 
      value={values}
    >
      {children}
    </LogonContext.Provider>
  );
}

export function LogonAction() {
  return (
    <LogonContext.Consumer>
      {context => {
        if (context === undefined) throw new Error('CountConsumer must be used within a CountProvider')
        
        let Page = {} as React.FC;

        switch(context.pageAction) {
          case 1:
            Page = LogonForm;
            break;
          case 2:
            Page = PasswordRecovery;
            break;
          case 3:
            Page = PasswordRecoverySuccess;
            break;
          default:
            Page = LogonForm;
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
            in={context.loadPage}
            appear={true}
            timeout={100}
            mountOnEnter
            unmountOnExit
          >
            {state => (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}>
                <Page />
              </div>
            )}
          </Transition>
        );
      }}
    </LogonContext.Consumer>
  );
}

export function setPage(
  setLoadPage: Dispatch<SetStateAction<boolean>>, 
  setPageAction: Dispatch<SetStateAction<number>>,
  page: number
  ) {
  setLoadPage(false);
  setTimeout(() => {
    setPageAction(page);
    setLoadPage(true);
  }, 100);
}

export function useLogonContext() {
  const context = useContext(LogonContext);

  if(!context) throw new Error('useLogonContext must be used within a LogonProvider.');

  return context;
}