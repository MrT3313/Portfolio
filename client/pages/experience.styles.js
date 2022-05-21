import styled from '@emotion/styled'
import { Flex } from '../components/structural'
import { colors } from '../consts'

export const Container = styled(Flex)`
  background: ${colors.CHARCOAL};

  .experienceCard {
    margin-bottom: 10px;

    :last-child {
      margin: 0;
    }
  };
`