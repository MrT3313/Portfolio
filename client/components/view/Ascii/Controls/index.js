// components
import Resolution from './Resolution'
// styles
import * as S from '../styled'

const Controls = ({ isFetching, refetchImg }) => {
  return (
    <S.Controls direction="column" justify="center" align="center">
      Hello from Ascii CONTROLS
      <button onClick={refetchImg}>{isFetching ? "fetching..." : "GET NEW IMAGE"}</button>
      <Resolution />
    </S.Controls>
  )
}

export default Controls