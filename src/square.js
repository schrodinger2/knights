import React, { useState } from 'react';

const DrawingSquare = ({svg, j, i}) => {
  let [knight, setKnight] = useState(false);
  const changer = () => {
    setKnight(prevknight => !prevknight)
  }
  let classes = `square`;
  //styling the squares one black and one white
  if ((j + i) % 2 === 1) {
    classes += ` black`;
  } else {
    classes += ` white`;
  }
  const obj = {
    classes: classes ,
    svgOn: knight ,
    svg: svg
  }
  // let newSquare = < div className={classes} onClick={() => {onKnight(newSquare)}} key={obj.key} > < /div>;
  const newSquare = < div className={obj.classes} onClick={changer}>{knight ? obj.svg : null}< /div>;
  return newSquare;
}

export default DrawingSquare;
