import React from 'react';
import DrawingSquare from './square';
import Fight from './fight.js';

class App extends React.Component {
  state = {
    squares64: [
      { i: 0, j: 0, knight: false},
      { i: 0, j: 1, knight: false},
      { i: 0, j: 2, knight: false},
      { i: 0, j: 3, knight: false},
      { i: 0, j: 4, knight: false},
      { i: 0, j: 5, knight: false},
      { i: 0, j: 6, knight: false},
      { i: 0, j: 7, knight: false},
      { i: 1, j: 0, knight: false},
      { i: 1, j: 1, knight: false},
      { i: 1, j: 2, knight: false},
      { i: 1, j: 3, knight: false},
      { i: 1, j: 4, knight: false},
      { i: 1, j: 5, knight: false},
      { i: 1, j: 6, knight: false},
      { i: 1, j: 7, knight: false},
      { i: 2, j: 0, knight: false},
      { i: 2, j: 1, knight: false},
      { i: 2, j: 2, knight: false},
      { i: 2, j: 3, knight: false},
      { i: 2, j: 4, knight: false},
      { i: 2, j: 5, knight: false},
      { i: 2, j: 6, knight: false},
      { i: 2, j: 7, knight: false},
      { i: 3, j: 0, knight: false},
      { i: 3, j: 1, knight: false},
      { i: 3, j: 2, knight: false},
      { i: 3, j: 3, knight: false},
      { i: 3, j: 4, knight: false},
      { i: 3, j: 5, knight: false},
      { i: 3, j: 6, knight: false},
      { i: 3, j: 7, knight: false},
      { i: 4, j: 0, knight: false},
      { i: 4, j: 1, knight: false},
      { i: 4, j: 2, knight: false},
      { i: 4, j: 3, knight: false},
      { i: 4, j: 4, knight: false},
      { i: 4, j: 5, knight: false},
      { i: 4, j: 6, knight: false},
      { i: 4, j: 7, knight: false},
      { i: 5, j: 0, knight: false},
      { i: 5, j: 1, knight: false},
      { i: 5, j: 2, knight: false},
      { i: 5, j: 3, knight: false},
      { i: 5, j: 4, knight: false},
      { i: 5, j: 5, knight: false},
      { i: 5, j: 6, knight: false},
      { i: 5, j: 7, knight: false},
      { i: 6, j: 0, knight: false},
      { i: 6, j: 1, knight: false},
      { i: 6, j: 2, knight: false},
      { i: 6, j: 3, knight: false},
      { i: 6, j: 4, knight: false},
      { i: 6, j: 5, knight: false},
      { i: 6, j: 6, knight: false},
      { i: 6, j: 7, knight: false},
      { i: 7, j: 0, knight: false},
      { i: 7, j: 1, knight: false},
      { i: 7, j: 2, knight: false},
      { i: 7, j: 3, knight: false},
      { i: 7, j: 4, knight: false},
      { i: 7, j: 5, knight: false},
      { i: 7, j: 6, knight: false},
      { i: 7, j: 7, knight: false}
    ]
  };

  svg = <svg version="1.1" className="knight" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 50 50" style={{enableBackground: "new 0 0 50 50", fill: "red"}} xmlSpace="preserve"><path d="M40,44.5H12v-0.54c0-0.81,0.65-1.46,1.46-1.46h25.08c0.81,0,1.46,0.65,1.46,1.46V44.5z"/><path d="M38.5,41.5h-25c0-0.55,0.22-1.05,0.59-1.41c0.36-0.37,0.86-0.59,1.41-0.59h21C37.6,39.5,38.5,40.4,38.5,41.5z"/><path d="M34.5,28c0,3.25-0.31,6.42-0.91,9.5H19.63c1.21-2.93,1.87-6.14,1.87-9.5c0-2.31-0.31-4.55-0.91-6.68C20.56,21.56,19.92,25.94,17,24c-3-2-9,3-9,3l-1-2c0,0,1-5,10.08-11.19C26.16,7.62,28.4,4.06,28.4,4.06C32.29,11.17,34.5,19.33,34.5,28z"/></svg>

  unKnight = (i, j) => {
    const th = i * 8 + j;
    let newSquare64 = this.state.squares64
    newSquare64[th].knight = !newSquare64[th].knight
    this.setState({ squares64: newSquare64 })
  };

  randomMoves = (i, j) => {
  // The knight moves "L" shape in any direction
  // So plus or minus 2 in the X axis and plus or minus 1 in the Y axis
  // Or plus or minus 1 in the X axis and plus or minus 2 in the Y axis

  let moveOneStepAt;
  let moveTwoStepsAt;
  let random = Math.random();
  if (random > 0.5) {
    moveTwoStepsAt = parseInt(j);
    moveOneStepAt = parseInt(i);
  } else {
    moveTwoStepsAt = parseInt(i);
    moveOneStepAt = parseInt(j);
  }

  // if the knight is near the end of the board the knight cant jump off it so the moves are more limited
  if (moveTwoStepsAt <= 1 || Math.random() > 0.5 && moveTwoStepsAt <= 5) {
    moveTwoStepsAt += 2
  } else {
    moveTwoStepsAt -= 2
  }


  if (moveOneStepAt == 0 || Math.random() > 0.5 && moveOneStepAt != 7) {
    moveOneStepAt += 1;
  } else {
    moveOneStepAt -= 1;
  }

  // getting the new values of i and j
  if (random > 0.5) {
    j = moveTwoStepsAt;
    i = moveOneStepAt;
  } else {
    i = moveTwoStepsAt;
    j = moveOneStepAt;
  }

  return [i, j];
}

  newIteration = () => {
    let knightDisappear = this.state.squares64.filter(square => square.knight === true);
    let knightAppear = [];
    for (var i = 0; i < knightDisappear.length; i++) {
      let [iii, jjj] = this.randomMoves(knightDisappear[i].i, knightDisappear[i].j);
      knightAppear.push({i: iii, j: jjj});
    }
    knightDisappear.map(square => this.unKnight(square.i, square.j))
    knightAppear.map(square => this.unKnight(square.i, square.j))
  };

  render() {
    return (
      <>
        <div className="board">
          {this.state.squares64.map(square => <DrawingSquare svg={this.svg} i={square.i} j={square.j} knight={square.knight} onKnight={this.unKnight} />)}
        </div>
        <div className="card">
          <Fight onNewIteration={this.newIteration}/>
        </div>
      </>
    );
  }
}

export default App;
