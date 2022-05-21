import styled from '@emotion/styled'
import { Flex, Text } from '../../structural'
import { theme } from '../../../consts'

export const Container = styled(Flex)`
  label: HEADER_CONTAINER;
  background: ${theme.PRIMARY};
`

export const Left = styled(Flex)``

export const Right = styled(Flex)``

export const IconWrapper = styled(Text)`
  display: flex;
`