import styled from 'styled-components';
import PulseLoader from "react-spinners/PulseLoader";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Spinner = styled(PulseLoader)`
  display: block;
  margin: 2 auto;
`;
