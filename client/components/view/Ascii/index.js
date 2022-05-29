/**
 * This component converts an input in Ascii Art
 * 
 * INPUTS
 *    - type:string    
 *      - options
 *        1. "img" - V1 implemented
 *        2. "video" - ❌ not implemented yet
 */

import { useEffect, useState } from 'react'
// components
import { Flex, Text } from '../../structural'
import Controls from './Controls'
import Canvas from './Canvas'
import Image from "next/image";
// rQuery
import { 
  useGetUpsplashRandomImage,
} from '../../../rQuery/api'


const Ascii = ({ type = "img" }) => {
  const [imageSize] = useState(500);
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [imgInfo, setImgInfo] = useState(null);
  const [resolution, setResolution] = useState(null);
  const [showImg, setShowImg] = useState(false);

  // hooks
  const {
    isLoading: isLoadingUpsplash,
    isFetching: isFetchingUpsplash,
    data: upsplash,
    refetch: refetchUpsplash,
  } = useGetUpsplashRandomImage()

  // useEffect
  useEffect(() => {
    if (!upsplash) return 
    // TODO: extract to util? -> scale image
    const scale = Math.min((imageSize / upsplash.width), imageSize / upsplash.height)
    
    const scaledHeight = (upsplash.height * scale).toFixed(2)
    const scaledWidth = (upsplash.width * scale).toFixed(2)

    const prep = {
      initialDimensions: {
        height: upsplash.height,
        width: upsplash.width
      },
      appTargetDimensions: {
        height: imageSize,
        width: imageSize,
      }, 
      scaledDimensions: {
        height: scaledHeight,
        width: scaledWidth,
      },
    }

    setImgInfo(prep)
    setIsLoading(false)
  }, [upsplash])

  return (
    <Flex
      label="ASCII_CONTAINER"
      justify="center"
      align="center"
      width="100%"
      direction="column"
    >
      <Controls 
        isFetching={isFetchingUpsplash} 
        refetchImg={refetchUpsplash}
        {...{ imgInfo, isLoadingUpsplash }}
        {...{ resolution, setResolution }}
        {...{ showImg, setShowImg }}
      />
      {isLoading ? (
        <Flex>Loading Random Image</Flex>
      ) : (
        <Flex>
          <Flex display={showImg ? "flex" : "none"}>
            <Image 
              src={upsplash.urls.regular}
              height={imgInfo?.scaledDimensions.height} width={imgInfo?.scaledDimensions.width}
            />
          </Flex> 
          <Canvas 
            imageUrl={upsplash.urls.regular}
            height={imgInfo?.scaledDimensions.height}
            width={imgInfo?.scaledDimensions.width}
            resolution={resolution}
          />
        </Flex>
      )}
    </Flex>
  )
}

export default Ascii