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

import { useEffect, useState } from 'react'
// components
import { Flex } from '../../structural'
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
  const [imageSize, setImageSize] = useState(500)

  // hooks
  const {
    data: random_image,
    refetch: refetchRandomImage 
  } = useGetRandomImage(imageSize)
  const { 
    isLoading: isLoadingRandomImages,
    data: random_images,
    refetch: refetchRandomImages
  } = useGetRandomImages({ limit: 5 })
  const {
    isLoading: isLoadingUpsplash,
    isFetching: isFetchingUpsplash,
    data: upsplash,
    refetch: refetchUpsplash,
  } = useGetUpsplashRandomImage()

  return (
    <S.Container
      justify="center"
      align="center"
      width="100%"
      direction="column"
    >
      <Controls isFetching={isFetchingUpsplash} refetchImg={refetchUpsplash}/>
      {isLoadingRandomImages ? (
        <Flex>Loading Random Image</Flex>
      ) : (
        <Flex>
          <Flex>
            <Image 
              src={upsplash.urls.regular}
              height={upsplash.height}
              width={upsplash.width}
            />
          </Flex>
          <Canvas 
            imageUrl={upsplash.urls.regular}
            height={imageSize} width={imageSize}
          />

          {/* {random_images.map((img, i) => {
            console.log('THE CURRENT IMAGE', img)
            return (
              <Flex key={i}>
                <Image 
                  // V3
                  src={upsplash.urls.regular}
                  height={upsplash.height}
                  width={upsplash.width}


                  // V2
                  // src={`https://picsum.photos/200/200`}
                  // height={imageSize}
                  // width={imageSize}

                  // V1
                  // src={img.download_url}
                  // height={img.height}
                  // width={img.width}
                />
                <Canvas
                  // V3

                  // V2
                  // imageUrl={`https://picsum.photos/200/200`}
                
                  // V1
                  // imageUrl={img.download_url} 
                  // height={imageSize}
                  // width={imageSize}
                />
              </Flex>
            )
          })} */}

        </Flex>
      )}
      <button onClick={refetchUpsplash}>GET NEW IMAGE</button>
    </S.Container>
  )
}

export default Ascii