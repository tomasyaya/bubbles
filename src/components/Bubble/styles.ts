import styled from "styled-components";

export const Container = styled("div")<{
  color: string;
  top: number;
  left: number;
}>`
  background-color: ${({ color }) => `#${color}`};
  text-transform: uppercase;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  position: absolute;
  text-align: center;
`;

export const Initials = styled("p")``;
