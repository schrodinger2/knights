import { useState } from 'react';

const DrawingSquare = ({svg, i, j, onKnight, knight}) => {

  let classes = `square`;
  //styling the squares one black and one white
  if ((j + i) % 2 === 1) {
    classes += ` black`;
  } else {
    classes += ` white`;
  }

  const newSquare = < div key={{i: i, j: j}} className={classes} onClick={() => onKnight(i, j)}> {knight ? svg : null} < /div>;
  return newSquare;
}

export default DrawingSquare;
