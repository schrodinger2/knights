import { useState } from 'react';

export let whereKnights = [];
// export let [knight, setKnight];
export let newIteration;
const DrawingSquare = ({svg, i, j}) => {
  let classes = `square`;
  //styling the squares one black and one white
  if ((j + i) % 2 === 1) {
    classes += ` black`;
  } else {
    classes += ` white`;
  }

  const obj = {
    classes: classes ,
    key: {i: i, j: j},
    svg: svg
  }

  let [knight, setKnight] = useState(() => false);

  const changer = () => {
    setKnight(prevknight => !prevknight)
    // console.log(obj.key);
  };

  newIteration = () => {
    setKnight(prevknight => false);
    whereKnights = [];
  };

  // newKnight = (ii, jj) => {
  //     setKnight(prevknight => true);
  //     whereKnights.push({i: ii, j: jj});
  //   }
  // }

  const newSquare = < div className={obj.classes} onClick={changer}>{knight ? obj.svg : null}< /div>;
  if (knight) { whereKnights.push(obj.key)}
  // console.log(newSquare);
  return newSquare;
}

export default DrawingSquare;
