import styled from '@emotion/styled'
import { Flex } from '../../structural'
import { theme, colors } from '../../../consts'

export const Container = styled(Flex)`
  .active {
    color: ${theme.SECONDARY};
  }
  `

export const Spacer = styled.div`
  border-left: 1.5px solid ${colors.WHITE};
  margin-right: 5px;
  background: ${colors.WHITE}
  border-radius: 5px;
  height: 100%;
`