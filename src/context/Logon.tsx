import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';


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