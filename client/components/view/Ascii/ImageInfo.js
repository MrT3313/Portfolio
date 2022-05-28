// components
import {
  Flex,
  Text,
} from '../../structural'

const ImageInfo = ({
  imgInfo: {
    initialDimensions,  
    appTargetDimensions,
    scaledDimensions,
  } 
}) => {
  console.log('passed data',{
    initialDimensions,
    appTargetDimensions,
    scaledDimensions
  })
  return(
    <Flex direction="column">
      <Flex width="100%" justify="center">
        <Text>Image Info</Text>
      </Flex>
      <Flex direction="column">
        <Text>{`Original Upsplash Dimensions: ${initialDimensions?.height} x ${initialDimensions?.width}`}</Text>
        <Text>{`App Dimensions: ${appTargetDimensions?.height} x ${appTargetDimensions?.width}`}</Text>
        <Text>{`Scaled Dimensions: ${scaledDimensions?.height} x ${scaledDimensions?.width}`}</Text>
      </Flex>
    </Flex>
  )
}

export default ImageInfo