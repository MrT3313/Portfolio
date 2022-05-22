import styled from "@emotion/styled";
import { Flex } from "../../structural";

export const Container = styled(Flex)`
  label: ASCII_CONTAINER;

  border: 2px solid red;
`

export const Controls = styled(Flex)`
  justify-content: center;
  align-items: center;

`

export const Display = styled(Flex)`
  justify-content: center;
  align-items: center;

border: 2px dashed blue;
`
export const Canvas = styled.canvas`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 200px;
  min-width: 200px;

  border: 2px solid blue;
`