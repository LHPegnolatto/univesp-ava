import styled from 'styled-components';
import { FaPowerOff } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export const LogoffButton = styled(FaPowerOff)`
  color: #d13239;
  font-size: 5rem;

  cursor: pointer;
  user-select: none;

  transition: color .2s;

  &:hover {
    color: #eb4d54;
  }
`;
