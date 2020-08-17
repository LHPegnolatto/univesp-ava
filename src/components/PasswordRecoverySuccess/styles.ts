import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  flex-direction: column;
`;

export const SuccessIcon = styled(FaCheck)`
  color: #26A65B;
  font-size: 3.5rem;
`;

export const Description = styled.span`
  color: #354551;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;

  padding-top: 5px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
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