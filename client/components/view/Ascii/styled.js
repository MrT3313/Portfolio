import styled from "@emotion/styled";
import { Flex } from "../../structural";

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
  background: white;
`