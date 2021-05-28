import { Container } from "./styles";
import { PlaygroundProps } from "./types";

function PlayGround({ children }: PlaygroundProps) {
  return <Container>{children}</Container>;
}

export default PlayGround;
