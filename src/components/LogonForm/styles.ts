import styled, { css } from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;

  width: 420px;
  height: 312px;

  border-radius: 3px;

  padding: 30px;

  z-index: 2;

  background-color: #fff;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media(max-width: 500px) {
    width: 100%;
    margin: 40px;
  }
`;

export const Header = styled.div`
  display: flex;  
  align-items: center;

  flex-direction: column;
`;

export const Title = styled.label`
  color: #d13239;

  font-size: 1rem;
  font-weight: bold;

  margin-bottom: 5px;

  text-transform: uppercase;
`;

export const Subtitle = styled.label`
  color: #354551;

  font-size: 0.95rem;
  font-weight: bold;

  text-transform: uppercase;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  flex-direction: column;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  & + div {
    margin-top: 20px;
  }
`;

export const InputLabel = styled.label`
  color: #d13239;

  font-size: 12px;
  font-weight: 500;

  margin-bottom: 5px;
`;

export const Input = styled.input`
  background-color: #fafafa;

  border: 1px solid #e2ebed;
  border-radius: 3px;

  padding: 5px 10px;

  width: 100%;

  &::placeholder {
    color: #c7cfd1;
  }
`;

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
  color: #d13239;

  cursor: pointer;

  position: absolute;
  right: 10px;

  transition: color .2s;

  &:hover {
    color: #eb4d54;
  }
`;

export const Eye = styled(FaEye)`
  ${eyesStyles}
`;

export const EyeSlash = styled(FaEyeSlash)`
   ${eyesStyles}
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Recovery = styled.div`
  color: #d13239;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  user-select: none;

  transition: color .2s;

  &:hover {
    color: #eb4d54;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 25px;

  background-color: #d13239;

  border-radius: 3px;

  color: #fff;

  font-weight: 500;

  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  transition: background-color .2s;

  &:hover {
    background-color: #eb4d54;
  }
`;