import React from 'react';
import DrawingSquare from './square';
import Fight from './fight.js';
import SpeedController from './speedControl.jsx';
import ColorChanger from './changeColor.jsx';

class App extends React.Component {
  state = {
    squares64: [
      { i: 0, j: 0, knight: false, fill: "#112233"},
      { i: 0, j: 1, knight: false, fill: "#112233"},
      { i: 0, j: 2, knight: false, fill: "#112233"},
      { i: 0, j: 3, knight: false, fill: "#112233"},
      { i: 0, j: 4, knight: false, fill: "#112233"},
      { i: 0, j: 5, knight: false, fill: "#112233"},
      { i: 0, j: 6, knight: false, fill: "#112233"},
      { i: 0, j: 7, knight: false, fill: "#112233"},
      { i: 1, j: 0, knight: false, fill: "#112233"},
      { i: 1, j: 1, knight: false, fill: "#112233"},
      { i: 1, j: 2, knight: false, fill: "#112233"},
      { i: 1, j: 3, knight: false, fill: "#112233"},
      { i: 1, j: 4, knight: false, fill: "#112233"},
      { i: 1, j: 5, knight: false, fill: "#112233"},
      { i: 1, j: 6, knight: false, fill: "#112233"},
      { i: 1, j: 7, knight: false, fill: "#112233"},
      { i: 2, j: 0, knight: false, fill: "#112233"},
      { i: 2, j: 1, knight: false, fill: "#112233"},
      { i: 2, j: 2, knight: false, fill: "#112233"},
      { i: 2, j: 3, knight: false, fill: "#112233"},
      { i: 2, j: 4, knight: false, fill: "#112233"},
      { i: 2, j: 5, knight: false, fill: "#112233"},
      { i: 2, j: 6, knight: false, fill: "#112233"},
      { i: 2, j: 7, knight: false, fill: "#112233"},
      { i: 3, j: 0, knight: false, fill: "#112233"},
      { i: 3, j: 1, knight: false, fill: "#112233"},
      { i: 3, j: 2, knight: false, fill: "#112233"},
      { i: 3, j: 3, knight: false, fill: "#112233"},
      { i: 3, j: 4, knight: false, fill: "#112233"},
      { i: 3, j: 5, knight: false, fill: "#112233"},
      { i: 3, j: 6, knight: false, fill: "#112233"},
      { i: 3, j: 7, knight: false, fill: "#112233"},
      { i: 4, j: 0, knight: false, fill: "#112233"},
      { i: 4, j: 1, knight: false, fill: "#112233"},
      { i: 4, j: 2, knight: false, fill: "#112233"},
      { i: 4, j: 3, knight: false, fill: "#112233"},
      { i: 4, j: 4, knight: false, fill: "#112233"},
      { i: 4, j: 5, knight: false, fill: "#112233"},
      { i: 4, j: 6, knight: false, fill: "#112233"},
      { i: 4, j: 7, knight: false, fill: "#112233"},
      { i: 5, j: 0, knight: false, fill: "#112233"},
      { i: 5, j: 1, knight: false, fill: "#112233"},
      { i: 5, j: 2, knight: false, fill: "#112233"},
      { i: 5, j: 3, knight: false, fill: "#112233"},
      { i: 5, j: 4, knight: false, fill: "#112233"},
      { i: 5, j: 5, knight: false, fill: "#112233"},
      { i: 5, j: 6, knight: false, fill: "#112233"},
      { i: 5, j: 7, knight: false, fill: "#112233"},
      { i: 6, j: 0, knight: false, fill: "#112233"},
      { i: 6, j: 1, knight: false, fill: "#112233"},
      { i: 6, j: 2, knight: false, fill: "#112233"},
      { i: 6, j: 3, knight: false, fill: "#112233"},
      { i: 6, j: 4, knight: false, fill: "#112233"},
      { i: 6, j: 5, knight: false, fill: "#112233"},
      { i: 6, j: 6, knight: false, fill: "#112233"},
      { i: 6, j: 7, knight: false, fill: "#112233"},
      { i: 7, j: 0, knight: false, fill: "#112233"},
      { i: 7, j: 1, knight: false, fill: "#112233"},
      { i: 7, j: 2, knight: false, fill: "#112233"},
      { i: 7, j: 3, knight: false, fill: "#112233"},
      { i: 7, j: 4, knight: false, fill: "#112233"},
      { i: 7, j: 5, knight: false, fill: "#112233"},
      { i: 7, j: 6, knight: false, fill: "#112233"},
      { i: 7, j: 7, knight: false, fill: "#112233"}
    ],
    movementSpeed: 1000,
  };

  unKnight = (i, j) => {
    const th = i * 8 + j;
    let newSquare64 = this.state.squares64
    newSquare64[th].knight = !newSquare64[th].knight
    this.setState({ squares64: newSquare64 })
  };

  knightTrueOrFalse = (i, j, boolean) => {
    const th = i * 8 + j;
    let newSquare64 = this.state.squares64
    newSquare64[th].knight = boolean;
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
  if (moveTwoStepsAt <= 1 || (Math.random() > 0.5 && moveTwoStepsAt <= 5)) {
    moveTwoStepsAt += 2
  } else {
    moveTwoStepsAt -= 2
  }


  if (moveOneStepAt === 0 || (Math.random() > 0.5 && moveOneStepAt !== 7)) {
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
};

  newIteration = () => {
    let knightDisappear = this.state.squares64.filter(square => square.knight === true);
    let knightAppear = [];
    for (var i = 0; i < knightDisappear.length; i++) {
      let [iii, jjj] = this.randomMoves(knightDisappear[i].i, knightDisappear[i].j);
      knightAppear.push({i: iii, j: jjj});
    }
    knightDisappear.map(square => this.knightTrueOrFalse(square.i, square.j, false))
    knightAppear.map(square => this.knightTrueOrFalse(square.i, square.j, true))
  };

  changeMovementSpeed = up => {
    if (up) {
      this.setState({ movementSpeed: this.state.movementSpeed * 1.1})
    } else {
      this.setState({ movementSpeed: this.state.movementSpeed / 1.1})
    }
    console.log(this.state.movementSpeed);
  }

  changeFill = event => {
    let newSquare64 = this.state.squares64;
    newSquare64.map(square => square.knight ? null : square.fill = event.target.value )
    this.setState({ squares64: newSquare64 })
  }

  render() {
    return (
      <>
        <div className="board">
          {this.state.squares64.map(square => <DrawingSquare fill={square.fill} i={square.i} j={square.j} knight={square.knight} onKnight={this.unKnight} />)}
        </div>
        <div className="card">
          <Fight onNewIteration={this.newIteration} movementSpeed={this.state.movementSpeed}/>
          <SpeedController changeMovementSpeed={this.changeMovementSpeed}/>
          <ColorChanger changeFill={this.changeFill} />
        </div>
      </>
    );
  }
}

export default App;
