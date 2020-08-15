import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa'

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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  flex-direction: column;
`;

export const SuccessIcon = styled(FaCheck)`
  color: #26A65B;
  font-size: 4rem;
`;

export const Description = styled.span`
  color: #354551;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;

  padding-top: 20px;
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