import styled from '@emotion/styled'
import { Flex } from '../../structural'

export const Container = styled(Flex)``

export const Left = styled(Flex)``

// TODO: change to structural text component
export const Accent = styled(Flex)`
  color: ${({ color }) => color}
`