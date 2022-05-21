import styled from "@emotion/styled";
import { Flex } from "../../structural";
import { colors } from "../../../consts";

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  .currentJob {
    font-style: italic;
  }
`

export const Date = styled(Flex)`
  justify-content: center;
  min-width: 70px;
  color: ${colors.WHITE};
`