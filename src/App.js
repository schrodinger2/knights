import Board from './board.js';
import React, { useState } from 'react';

const App = () => {
  let [knight, setKnight] = useState(false);
  const changer = () => {
    setKnight(prevknight => !prevknight)
  }
  const makeKnight = (obj) => {
    // // // const color = "red";
    // if (newSquare.props.children === " ") {
    // //   // let fill = "#000";
    // //   // if (color) {
    // //   //   fill = color
    // //   // };
    // //   // let svg = `<svg version="1.1" class="knight" style=${fill} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path d="M40,44.5H12v-0.54c0-0.81,0.65-1.46,1.46-1.46h25.08c0.81,0,1.46,0.65,1.46,1.46V44.5z"/><path d="M38.5,41.5h-25c0-0.55,0.22-1.05,0.59-1.41c0.36-0.37,0.86-0.59,1.41-0.59h21C37.6,39.5,38.5,40.4,38.5,41.5z"/><path d="M34.5,28c0,3.25-0.31,6.42-0.91,9.5H19.63c1.21-2.93,1.87-6.14,1.87-9.5c0-2.31-0.31-4.55-0.91-6.68C20.56,21.56,19.92,25.94,17,24c-3-2-9,3-9,3l-1-2c0,0,1-5,10.08-11.19C26.16,7.62,28.4,4.06,28.4,4.06C32.29,11.17,34.5,19.33,34.5,28z"/></svg>`;
    // //   // newSquare.innerHTML = svg;
    // const svg = <svg version="1.1" class="knight" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 50 50" style={{enableBackground: "new 0 0 50 50;", fill: "red"}} xmlSpace="preserve"><path d="M40,44.5H12v-0.54c0-0.81,0.65-1.46,1.46-1.46h25.08c0.81,0,1.46,0.65,1.46,1.46V44.5z"/><path d="M38.5,41.5h-25c0-0.55,0.22-1.05,0.59-1.41c0.36-0.37,0.86-0.59,1.41-0.59h21C37.6,39.5,38.5,40.4,38.5,41.5z"/><path d="M34.5,28c0,3.25-0.31,6.42-0.91,9.5H19.63c1.21-2.93,1.87-6.14,1.87-9.5c0-2.31-0.31-4.55-0.91-6.68C20.56,21.56,19.92,25.94,17,24c-3-2-9,3-9,3l-1-2c0,0,1-5,10.08-11.19C26.16,7.62,28.4,4.06,28.4,4.06C32.29,11.17,34.5,19.33,34.5,28z"/></svg>
    // newSquare.props.children = svg
    // }
    const newSquare = < div className={obj.classes} onClick={changer}  key={obj.key} >{knight ? obj.svg : null}< /div>;
    return newSquare
  }
  return (
    <Board onKnight={makeKnight} svgOn={knight}/>
  );
}

export default App;
