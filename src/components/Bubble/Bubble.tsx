import { BubbleProps } from "./types";
import { Container, Initials } from "./styles";

function Bubble({ color, initial, top, left }: BubbleProps) {
  return (
    <Container color={color} top={top} left={left}>
      <Initials>{initial}</Initials>
    </Container>
  );
}

export default Bubble;
