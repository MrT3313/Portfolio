/**
 * This component converts an input in Ascii Art
 * 
 * INPUTS
 *    - type:string    
 *      - options
 *        1. "img" - 🟡 in progress
 *        2. "video" - ❌ not implemented yet
 */

// styles
import * as S from './styled'

const Ascii = ({ type = "img" }) => {
  return (
    <S.Container
      justify="center"
      width="100%"
    >
      Hello from Ascii
    </S.Container>
  )
}

export default Ascii