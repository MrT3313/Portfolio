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

const Canvas = () => {
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
      const img = await getBase64Image(`https://picsum.photos/200`)
      setRandomImage(img)
    }
    handleAsync()
  }, [])

  useEffect(() => {
    if (!randomImage) return

    // V2
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')


    const image = new Image();

    // V1
    image.src = placeholderBase64
    console.log('THE IMAGE', image)
    console.log('image.width', image.width)
    console.log('image.height', image.height)

    // V2
    // image.src = `${randomImage}`
    // console.log('THE IMAGE', image)
    // console.log('image.width', image.width)
    // console.log('image.height', image.height)

    let effect
    image.onload = function initialize() {
      canvas.height = image.height;
      effect = new CanvasClass(context, image.width, image.height, image);
      console.log('THE EFFECT', effect)

      // V1 - working w/ placeholde
      canvas.width = image.width;
      canvas.height = image.height;
      
      // V2
      // if (image.width) {
      //   canvas.width = image.width;
      // } else {
      //   // canvas.width = effect.width
      //   canvas.width = `${effect.width}px`
      // }
      // if (image.height) {
      //   canvas.height = image.height;
      // } else {
      //   // canvas.height = effect.height
      //   canvas.height = `${effect.height}px`
      // }

      effect.draw(10)
    }
  }, [randomImage])


  return (
    <S.Canvas
      ref={canvasRef}
    />
  );
}

export default Canvas