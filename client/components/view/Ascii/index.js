/**
 * This component converts an input in Ascii Art
 * 
 * INPUTS
 *    - type:string    
 *      - options
 *        1. "img" - 🟡 in progress
 *        2. "video" - ❌ not implemented yet
 */

// components
import Controls from './Controls'
import Display from './Display'
// styles
import * as S from './styled'

const Ascii = ({ type = "img" }) => {
  return (
    <S.Container
      justify="center"
      align="center"
      width="100%"
      direction="column"
    >
      <Controls />
      <Display />
    </S.Container>
  )
}

export default Ascii