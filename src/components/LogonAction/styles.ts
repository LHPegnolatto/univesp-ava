import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;

  width: 420px;
  height: 312px;

  padding: 30px;

  @media(max-width: 480px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: 420px;
  height: 312px;

  border-radius: 3px;

  z-index: 2;

  @media(max-width: 480px) {
    width: 100%;
  }

  background-color: #fff;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
