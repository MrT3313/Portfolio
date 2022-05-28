// components
import {
  Flex,
  Text,
} from '../../structural'
// icons
import { FaUnsplash } from "react-icons/fa";

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
    <Flex direction="column" minWidth="300px">
      <Flex width="100%" justify="center">
        <Text kind="title">Image Info</Text>
      </Flex>
      <Flex width="100%" justify="space-between">
        <Text>{`Image Source API:`}</Text>
        <button><a href={`https://unsplash.com/developers`} target="_blank"><Flex><Text margin="0 10px 0 0">Unsplash</Text><FaUnsplash /></Flex></a></button>
      </Flex>
      <Flex width="100%" justify="space-between">
        <Text>{`Original Dimensions:`}</Text>
        <Text>{`${initialDimensions?.height}h x ${initialDimensions?.width}w`}</Text>
      </Flex>
      <Flex width="100%" justify="space-between">
        <Text>{`Target Dimensions:`}</Text>
        <Text>{`${appTargetDimensions?.height}h x ${appTargetDimensions?.width}w`}</Text>
      </Flex>
      <Flex width="100%" justify="space-between">
        <Text>{`Scaled Dimensions:`}</Text>
        <Text>{`${scaledDimensions?.height}h x ${scaledDimensions?.width}w`}</Text>
      </Flex>
    </Flex>
  )
}

export default ImageInfo