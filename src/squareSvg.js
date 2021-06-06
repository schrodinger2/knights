import { useState } from 'react';
import { whereKnights } from './square';

const DrawingSquareSvg = ({svg, i, j}) => {

  let classes = `square`;
  //styling the squares one black and one white
  if ((j + i) % 2 === 1) {
    classes += ` black`;
  } else {
    classes += ` white`;
  }

  const obj = {
    classes: classes ,
    key: {i: i, j: j}
  }

  let [knight, setKnight] = useState(() => true);

  const changer = () =>  setKnight(prevknight => !prevknight);

  const newSquare = < div className={obj.classes} onClick={changer}> {svg} < /div>;
  if (knight) whereKnights.push({...obj.key, svg: true});
  return newSquare;
}

export default DrawingSquareSvg;
