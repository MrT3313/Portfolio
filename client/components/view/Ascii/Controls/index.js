// components
import { 
  Flex,
  Text,
} from '../../../structural'
import Resolution from './Resolution'
import ImageInfo from '../ImageInfo'

const Controls = ({ 
  isFetching, 
  refetchImg,
  imgInfo,
  resolution, 
  setResolution,
  showImg, setShowImg,
}) => {
  return (
    <Flex
      direction="column" 
      justify="center" 
      align="center" 
      background="white"
      borderRadius="10px"
      padding="15px"
      margin="0 0 30px 0"
    >
      <Flex
      >
        {imgInfo && (
          <ImageInfo imgInfo={imgInfo}/>
        )}
        <Flex 
          direction="column" 
          justify="space-between" 
          align="center" 
          margin="0 0 0 30px"
        >
          <Text kind="title">Controls</Text>
          <button onClick={refetchImg}>{isFetching ? "fetching..." : "Get New Image"}</button>
          <button onClick={() => setShowImg(!showImg)}>{showImg ? "Hide Source Image" : "Show Source Image"}</button>
          {/* TODO: debug resolution updating & redraw */}
          {/* <Resolution {...{ resolution, setResolution }}/> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Controls