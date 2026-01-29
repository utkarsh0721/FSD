import React, { useState } from 'react'
import cat from '../assets/cat3.png';

function ImageManipulation() {

  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [imgRotate, setImgRotate] = useState(0);

  function handleWidth() {
    setCatWidth(catWidth + 10);
  }

  function handleHeight() {
    setCatHeight(catHeight + 10);
  }

  function changeColor() {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));
  }

  function rotateImage() {
    setImgRotate(imgRotate + 30);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div style={{ border: '2px solid red', height: '400px', width: '400px', marginLeft: '200px' }}>
        <img
          src={cat}
          height={catHeight}
          width={catWidth}
          alt="cat"
          style={{
            paddingLeft: '100px',
            paddingTop: '100px',
            transform: `rotate(${imgRotate}deg)`
          }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleHeight}>Increase Height</button>
        <button onClick={handleWidth}>Increase Width</button>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={rotateImage}>Rotate Image</button>
      </div>

    </div>
  )
}

export default ImageManipulation;
