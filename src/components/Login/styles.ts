import styled, { css } from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const ButtonInputContainer = styled.span`
  display: flex;
  align-items: center;
  position: relative;

  > input {
    padding-right: 40px;
  }
`;

const eyesStyles = css`
  font-size: 20px;
  color: var(--primary);

  cursor: pointer;

  position: absolute;
  right: 10px;

  transition: color .2s;

  &:hover {
    color: var(--primaryHover);
  }
`;

export const Eye = styled(FaEye)`
  ${eyesStyles}
`;

export const EyeSlash = styled(FaEyeSlash)`
   ${eyesStyles}
`;

export const Recovery = styled.div`
  color: var(--primary);

  font-size: 0.9rem;
  font-weight: 500;

  margin-right: 20px;

  cursor: pointer;
  user-select: none;

  transition: color .2s;

  &:hover {
    color: var(--primaryHover);
  }
`;