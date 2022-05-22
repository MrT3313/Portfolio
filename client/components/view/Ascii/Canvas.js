// https://www.youtube.com/watch?v=HeT-5RZgEQY
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

import React, { useEffect, useRef } from "react";
// styles
import * as S from './styled'

const Canvas = () => {

  // refs
  const canvasRef = useRef()

  // useEffect
  useEffect(() => {
    console.log('THE CANVAS REF', canvasRef)
    const canvas = canvasRef.current
    console.log('THE CANVAS', canvas)
    const context = canvas.getContext('2d')
    console.log('THE CONTEXT', context)
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])


  return (
    <S.Canvas
      ref={canvasRef}
    />
  );
}

export default Canvas