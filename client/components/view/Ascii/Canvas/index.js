// https://www.youtube.com/watch?v=HeT-5RZgEQY
// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
// https://www.youtube.com/watch?v=HeT-5RZgEQY

// !! https://www.youtube.com/watch?v=HeT-5RZgEQY

import React, { useState, useEffect, useRef } from "react";
// styles
import * as S from '../styled'
// classes
import { CanvasClass } from "./Class";
// utils
import getBase64Image from "../../../../utils/getBase64Image";

// remove
import { placeholderBase64 } from "../../../../consts/placeholderBase64";

const Canvas = ({ 
  imageUrl, 
  height, 
  width,
}) => {
  // state
  const [randomImage, setRandomImage] = useState(null);

  // refs
  const canvasRef = useRef()

  // useEffect
  useEffect(() => {
    // TODO: display initial image as wel as ascii version
    // TODO: SOMETING IS BROKEN WITH THE ACTUAL SIZING OF THE CANVAS VS THE SIZE OF THE IMAGE?


    // V3
    const handleAsync = async () => {
      const img = await getBase64Image(imageUrl)
      setRandomImage(img)
    }
    handleAsync()
  }, [imageUrl])

  useEffect(() => {
    if (!randomImage) return

    // V2
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')


    const image = new Image();

    // V1
    // image.src = placeholderBase64
    // console.log('THE IMAGE', image)
    // console.log('image.width', image.width)
    // console.log('image.height', image.height)

    // V2
    image.src = `${randomImage}`
    // console.log('THE IMAGE', image)
    console.log('image.width', image.width)
    console.log('image.height', image.height)

    let effect
    image.onload = function initialize() {
      canvas.width = width;
      canvas.height = height;
      effect = new CanvasClass(context, width, height, image);

      effect.draw(7)
    }
  }, [randomImage])


  return (
    <S.Canvas ref={canvasRef} height={height} width={width} />
  );
}

export default Canvas