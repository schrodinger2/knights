import Svg from './svg.jsx';

const DrawingSquare = ({fill, i, j, onKnight, knight}) => {

  let classes = `square`;
  //styling the squares one black and one white
  if ((j + i) % 2 === 1) {
    classes += ` black`;
  } else {
    classes += ` white`;
  }

  const newSquare = < div key={{i: i, j: j}} className={classes} onClick={() => onKnight(i, j)}> {knight ? <Svg fill={fill} /> : null} < /div>;
  return newSquare;
}

export default DrawingSquare;
