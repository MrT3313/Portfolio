// components
import { 
  Flex,
  Text,
} from '../../../structural'
import Resolution from './Resolution'
import ImageInfo from '../ImageInfo'
// styles
import * as S from '../styled'

const Controls = ({ 
  isFetching, 
  refetchImg,
  imgInfo,
  resolution, 
  setResolution,
  showImg, setShowImg,
}) => {
  return (
    <S.Controls 
      direction="column" 
      justify="center" 
      align="center" 
    >
      <Text kind="title">Controls</Text>
      <Flex 
      >
        {imgInfo && (
          <ImageInfo imgInfo={imgInfo}/>
        )}
        <Flex 
          direction="column" 
          justify="center" 
          align="center" 
          margin="0 0 0 30px"
        >
          <button onClick={refetchImg}>{isFetching ? "fetching..." : "Get New Image"}</button>
          <button onClick={() => setShowImg(!showImg)}>{showImg ? "Hide Source Image" : "Show Source Image"}</button>
          {/* TODO: debug resolution updating & redraw */}
          {/* <Resolution {...{ resolution, setResolution }}/> */}
        </Flex>
      </Flex>
    </S.Controls>
  )
}

export default Controls