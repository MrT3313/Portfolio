/**
 * This component converts an input in Ascii Art
 * 
 * INPUTS
 *    - type:string    
 *      - options
 *        1. "img" - 🟡 in progress
 *        2. "video" - ❌ not implemented yet
 */

//https://www.youtube.com/watch?v=HeT-5RZgEQY
// https://www.youtube.com/watch?v=_N9xf1r1yD4
// https://www.youtube.com/watch?v=55iwMYv8tGI&t=1060s


// components
import Controls from './Controls'
import Canvas from './Canvas'
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
      <Canvas />
    </S.Container>
  )
}

export default Ascii