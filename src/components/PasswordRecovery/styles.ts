import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const Description = styled.span`
  color: var(--darkgray);
  font-size: 12rem;

  padding-top: 10px;
`;

export const GoBack = styled(FaArrowLeft)`
  color: var(--primary);
  font-size: 16rem;

  cursor: pointer;
  user-select: none;

  margin-right: 20px;

  transition: color 0.2s;

  &:hover {
    color: var(--primaryHover);
  }
`;
