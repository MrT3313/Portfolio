import React, { useState, useEffect, useRef } from 'react';
// styles
import * as S from '../styled';
// classes
import { CanvasClass } from './Class';
// utils
import getBase64Image from '../../../../utils/getBase64Image';
// remove
import { placeholderBase64 } from '../../../../consts/placeholderBase64';

const Canvas = ({ 
  imageUrl, 
  height, 
  width,
}) => {
  // state
  const [randomImage, setRandomImage] = useState(null);

  // refs
  const canvasRef = useRef();

  // useEffect
  useEffect(() => {
    const handleAsync = async () => {
      const img = await getBase64Image(imageUrl);
      setRandomImage(img);
    };
    handleAsync();
  }, [imageUrl]);

  useEffect(() => {
    if (!randomImage) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = `${randomImage}`;

    let effect;
    image.onload = function initialize() {
      canvas.width = width;
      canvas.height = height;
      effect = new CanvasClass(context, width, height, image);

      effect.draw(7);
    };
  }, [randomImage]);


  return (
    <S.Canvas ref={canvasRef} height={height} width={width} />
  );
};

export default Canvas;