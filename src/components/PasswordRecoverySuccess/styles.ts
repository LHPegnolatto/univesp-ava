import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import { LogonActionsContainer } from "../../styles/GlobalStyles";

export const SuccessIcon = styled(FaCheck)`
  color: var(--green);
  font-size: 30rem;
`;

export const Description = styled.span`
  color: var(--darkgray);
  font-size: 14rem;
  font-weight: bold;
  text-align: center;

  padding-top: 5px;
`;

export const ActionsContainer = styled(LogonActionsContainer)`
  justify-content: flex-end;
`;
