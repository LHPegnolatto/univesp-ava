import styled from 'styled-components';
import PulseLoader from "react-spinners/PulseLoader";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  margin: auto;
`;

export const Spinner = styled(PulseLoader)`
  display: block;
`;



