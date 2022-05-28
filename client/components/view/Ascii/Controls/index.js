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
  isLoadingUpsplash,
}) => {
  return (
    <S.Controls direction="column" justify="center" align="center">
      <Text>Controls</Text>
      <Flex border="2px solid blue">
        {imgInfo && (
          <ImageInfo imgInfo={imgInfo}/>
        )}
        <Flex direction="column" justify="center" align="center" border="2px solid red">
          <button onClick={refetchImg}>{isFetching ? "fetching..." : "GET NEW IMAGE"}</button>
          <Resolution />
        </Flex>
      </Flex>
    </S.Controls>
  )
}

export default Controls