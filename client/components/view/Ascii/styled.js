import styled from "@emotion/styled";
import { Flex } from "../../structural";

export const Container = styled(Flex)`
  label: ASCII_CONTAINER;

  border: 2px solid red;
`

export const Controls = styled(Flex)``

export const Display = styled(Flex)`
  justify-content: center;
  align-items: center;

border: 2px dashed blue;
`
export const Canvas = styled.canvas`
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  border: 2px solid blue;
`