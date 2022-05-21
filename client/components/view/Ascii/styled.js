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
  height: 200px;
  width: 200px;

  border: 2px dashed blue;
`