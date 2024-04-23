class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render(){
    return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}"/>`
  }

  setColor(color){
      this.shapeColor = color;
  }
};

class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render(){
  return `<circle cx="100" cy="100" r="73" fill="${this.shapeColor}"/>`
}
  setColor(color){
      this.shapeColor = color;
  }
};

class Square {
  constructor(shapeColor) { 
    this.shapeColor = shapeColor;
  }
  render(){
    return`<rect x="40" y="21" width="120" height="120" fill="${this.shapeColor}"/>`
  }
  setColor(color){
    this.shapeColor = color;
  }
};

function renderLogoShape(data) {
  switch(data.shape){
    case 'Triangle':
        return new Triangle (data.shapeColor);
    case 'Circle':
        return new Circle (data.shapeColor);
    case 'Square':
        return new Square (data.shapeColor);
    }
}

function renderShapeFont(shape) {
  switch(shape){
    case 'Circle':
    return '<text x="100" y="115" font-size="60" text-anchor="middle"'
    break;
    
    case 'Triangle':
    return '<text x="150" y="150" font-size="60" text-anchor="middle"'
    break;
    
    case 'Square':
    return '<text x="100" y="100" font-size="60" text-anchor="middle"'
    break;
    
    default:''
  }
}
function generateSVG(data) {
  const shapeSVG = renderLogoShape(data).render();
  return `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

  ${shapeSVG} 

  ${renderShapeFont(data.shape)} fill="${data.textColor}">${data.text}</text>
</svg>`;
}

module.exports = {Triangle, Circle, Square, generateSVG, renderLogoShape}