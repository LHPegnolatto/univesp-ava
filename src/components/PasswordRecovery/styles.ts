import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const Description = styled.span`
  color: var(--darkgray);
  font-size: 0.8rem;

  padding-top: 10px;
`;

export const GoBack = styled(FaArrowLeft)`
  color: var(--primary);
  font-size: 1.5rem;

  cursor: pointer;
  user-select: none;

  margin-right: 20px;

  transition: color .2s;

  &:hover {
    color: var(--primaryHover);
  }
`;