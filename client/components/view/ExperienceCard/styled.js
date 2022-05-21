import styled from "@emotion/styled";
import { Flex, Text } from "../../structural";

export const Container = styled(Flex)`
  padding: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
`

export const Title = styled(Text)`
  margin-right: 10px;
`

export const subTitle = styled(Text)`
  color: ${({ color }) => color }
`