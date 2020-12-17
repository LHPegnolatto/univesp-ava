import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Exclamation = styled(FaExclamationTriangle)`
  color: var(--primary);
  font-size: 7rem;

  margin-right: 1rem;

  user-select: none;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  
  flex-direction: column;
`;

export const Message = styled.span`
  color: var(--primary);
  font-size: 3rem;
  font-weight: bold;

  text-transform: uppercase;

  user-select: none;

  & + span {
    margin-top: -0.8rem;
  }
`;