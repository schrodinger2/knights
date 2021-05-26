import { newDamnKnight } from './board.js';
import { whereKnights } from "./square";
import { newIteration } from './square';
// import { newKnight } from './square';

const newknights = () => {

  //randomly setting the knights's new square in the i and j axis
  // const randomBoolean = () => Math.random() > 0.5 ? true : false;
  // let boolean1 = randomBoolean();
  // let boolean2 = randomBoolean();
  // let boolean3 = randomBoolean();
  // // console.log(boolean1);
  // if (boolean1 && boolean2 && boolean3) {
  //   const i = 2;
  //   const j = 1;
  // }else if (boolean1 && boolean2 && !boolean3) {
  //   const i = -2;
  //   const j = 1;
  // }else if (boolean1 && !boolean2 && boolean3) {
  //   const i = 2;
  //   const j = -1;
  // }else if (!boolean1 && boolean2 && boolean3) {
  //   const i = -2;
  //   const j = -1;
  // }else if (boolean1 && !boolean2 && !boolean3) {
  //   const i = 1;
  //   const j = 2;
  // }else if (!boolean1 && boolean2 && !boolean3) {
  //   const i = -1;
  //   const j = 2;
  // }else if (!boolean1 && !boolean2 && boolean3) {
  //   const i = 1;
  //   const j = -2;
  // }else if (!boolean1 && !boolean2 && !boolean3) {
  //   const i = -1;
  //   const j = -2;
  // }
  const i = -1;
  const j = -2;
  const newWhereKnights = [];
  whereKnights.forEach(item => newWhereKnights.push({i: item.i + i, j: item.j + j}));

  newIteration(); // clearing the board

  // adding the new knights on the new squares
  // newWhereKnights.forEach(item => newKnight(item.i , item.j));
  // console.log(newWhereKnights);
  // newDamnKnight(7, 7);
  // newDamnKnight(5, 5);
}

export default newknights;
