export class Cell {
  constructor(x, y, symbol, color) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    this.color = color;
  }
  draw (context) { 
    context.fillStyle = this.color;
    context.fillText(this.symbol, this.x, this.y);
    context.stroke();
  }
}

export class CanvasClass {
  constructor(context, width, height, image) {
    this.imageCellArray = [];
    this.characterRamp = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^\'.';
    this.maxRgb = 255;
    this.symbols = [];
    this.context = context;
    this.width = width;
    this.height = height;
    this.context.drawImage(image, 0, 0, this.width, this.height);
    this.pixels = this.context.getImageData(0, 0, this.width, this.height);
  }

  convertToSymbol = (averageColorValue) => {
    const percent = parseFloat(averageColorValue / this.maxRgb).toFixed(2);
    const targetChar = Math.round(percent * this.characterRamp.length);
    const result = this.characterRamp.charAt(targetChar - 1);
    
    return result;
  };
  scanImage = (cellSize) => {
    for (let y = 0; y < this.pixels.height; y += cellSize) { // rows
      for (let x = 0; x < this.pixels.width; x += cellSize) { // cols
        const posX = x * 4;
        const poxY = y * 4;
        const pos = (poxY * this.pixels.width) + posX;

        if (this.pixels.data[pos + 3] > 128) { // determin transparent filter
          const red = this.pixels.data[pos];
          const green = this.pixels.data[pos + 1];
          const blue = this.pixels.data[pos + 2];
  
          const total = red + green + blue;
          const averageColorValue = total / 3;
  
          const color = `rgb(${red},${green},${blue})`;
          const symbol = this.convertToSymbol(averageColorValue);
  
          if (total < 700) this.imageCellArray.push(new Cell(x, y, symbol, color));
        }
      }
    }
  };
  drawAscii = () => {
    this.context.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < this.imageCellArray.length; i++) {
      this.imageCellArray[i].draw(this.context);
    }
  };
  draw = (cellSize) => {
    this.scanImage(cellSize);
    this.drawAscii();
  };
}