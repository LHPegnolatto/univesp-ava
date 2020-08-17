import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa'

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

export const Description = styled.span`
  color: #354551;
  font-size: 0.8rem;

  padding-top: 10px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const GoBack = styled(FaArrowLeft)`
  color: #d13239;
  font-size: 1.5rem;

  cursor: pointer;
  user-select: none;

  margin-right: 20px;

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