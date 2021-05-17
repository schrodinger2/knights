const DrawingSquare = (j, i, onKnight) => {

  let classes = `${j},${i} square`;
  //styling the squares one black and one white
  if ((j + i) % 2 === 1) {
    classes += ` black`;
  } else {
    classes += ` white`;
  }
  let newSquare = < div className={classes} onClick={() => onKnight(newSquare)}  > < /div>;

  return newSquare;
}

const DrawingSquares = ({onKnight}) => {
  const list = [];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      list.push(DrawingSquare(j, i, onKnight));
    }
  }
  return list;
}

export default DrawingSquares;
