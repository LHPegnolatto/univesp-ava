import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    max-width: 100%;
    
    overflow-x: hidden;
  }

  html {
    font-size: 5.25%;

    @media (min-width: 600px) {
      font-size: 5.5%;
    }

    @media (min-width: 900px) {
      font-size: 5.75%;
    }

    @media (min-width: 1200px) {
      font-size: 6.25%;
    }

    @media (min-width: 1800px) {
      font-size: 6.5%;
    }
  }

  body {
    font-size: 16rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    user-select: none;
  }

  button, input {
    border: 0;
  }

  :root {
    --primary: #d13239;
    --primaryHover: #eb4d54;

    --whitePrimary: #fff;
    --whiteSecondary: #fafafa;
    --whiteTertiary: #e2ebed;
    --whiteQuaternary: #c7cfd1;

    --darkgray: #354551;

    --green: #26A65B;

    --errorPrimary: #fc0303;
    --errorSecondary: #ff6b6b;
    --errorTertiary: #ffa6a6;
  }
`;

export const LogonHeader = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
`;

export const LogonTitle = styled.label`
  color: var(--primary);

  font-size: 14rem;
  font-weight: bold;

  text-align: center;

  margin-bottom: 5px;

  text-transform: uppercase;
`;

export const LogonSubtitle = styled.label`
  color: var(--darkgray);

  font-size: 13rem;
  font-weight: bold;

  text-align: center;

  text-transform: uppercase;
`;

export const LogonForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  flex-direction: column;
`;

export const LogonInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  & + div {
    margin-top: 20px;
  }
`;

export const LogonInputLabel = styled.label`
  color: var(--primary);

  font-size: 12rem;
  font-weight: 500;

  margin-bottom: 5px;
`;

export const LogonInput = styled.input`
  background-color: var(--whitePrimary);

  border: 1px solid
    ${(props) =>
      props.error ? "var(--errorSecondary)" : "var(--whiteTertiary)"};
  border-radius: 3px;

  padding: 7px 14px;

  width: 100%;

  &::placeholder {
    color: ${(props) =>
      props.error ? "var(--errorTertiary)" : "var(--whiteQuaternary)"};
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

export const LogonActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const LogonSubmitButton = styled.button`
  padding: 15px 25px;

  background-color: var(--primary);

  border-radius: 3px;

  color: var(--whitePrimary);

  font-weight: 500;

  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primaryHover);
  }
`;
