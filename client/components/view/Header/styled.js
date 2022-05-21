import styled from '@emotion/styled'
import { Flex } from '../../structural'
import { theme } from '../../../consts'

export const Container = styled(Flex)`
  background: ${theme.PRIMARY}
`

export const Left = styled(Flex)``

// TODO: change to structural text component
export const Accent = styled(Flex)`
  color: ${({ color }) => color}
`