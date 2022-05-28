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

// !!! https://codepen.io/andersdn/pen/VKPrgg

import { useEffect, useState } from 'react'
// components
import { Flex, Text } from '../../structural'
import Controls from './Controls'
import Canvas from './Canvas'
import Image from "next/image";
// styles
import * as S from './styled'
// rQuery
import { 
  useGetRandomImage,
  useGetRandomImages,
  useGetUpsplashRandomImage,
} from '../../../rQuery/api'


const Ascii = ({ type = "img" }) => {
  const [imageSize] = useState(500);
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [imgInfo, setImgInfo] = useState(null);
  const [resolution, setResolution] = useState(null)

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
    console.log('🔱 UPSPLASH', upsplash)
    // TODO: extract to util -> sale image
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
    <S.Container
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
      />
      {isLoading ? (
        <Flex>Loading Random Image</Flex>
      ) : (
        <Flex>
          <Flex direction="column">
            <Flex direction="column">
            </Flex>
            <Flex>
              <Image 
                src={upsplash.urls.regular}
                height={imgInfo?.scaledDimensions.height} width={imgInfo?.scaledDimensions.width}
              />
            </Flex> 
          </Flex>
          <Canvas 
            imageUrl={upsplash.urls.regular}
            height={imgInfo?.scaledDimensions.height}
            width={imgInfo?.scaledDimensions.width}
            resolution={resolution}
          />

        </Flex>
      )}
    </S.Container>
  )
}

export default Ascii