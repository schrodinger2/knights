let boardLength = 8;
document.body.onload =  () => {
  let board = document.querySelector(".board");
  for (var i = 0; i < boardLength; i++) {
    // there are 64 squares in a chess board
    for (var j = 0; j < boardLength; j++) {
      var newDiv = document.createElement("div");
      newDiv.className = "square";


      if ( (i+j) % 2 == 1) {
        newDiv.classList.add("black");
      }else {
        newDiv.classList.add("white");
      }
      document.body.querySelector(".board").appendChild(newDiv)


      newDiv.classList.add(`j${j}i${i}`); //to ideintify the squares


      let square = document.body.querySelector(`.j${j}i${i}`);

      square.addEventListener('click', () => {
          let knight = document.createElement("div");
          knight.className = "knight";
          square.appendChild(knight)
      });
    }
  }
}

setInterval( () => { movingKnights()}, 1000);

function movingKnights() {
  let knights = document.body.querySelectorAll(".knight")

  for (var i = 0; i < knights.length; i++) {
    let squareID = knights[i].parentNode.classList[2];
    //the idintifier class has the position of the square (y and i)

    let jth = squareID[1]; //j of the current parentNode
    let ith = squareID[3]; //i of the current parentNode

    let newJAndI = randomMoves(jth, ith);
    let newParentNode = document.body.querySelector(`.j${newJAndI[0]}i${newJAndI[1]}`);
    newParentNode.appendChild(knights[i])
  }
}



function randomMoves(j, i) {
  // The knight moves "L" shape in any direction
  // So plus or minus 2 in the X axis and plus or minus 1 in the Y axis
  // Or plus or minus 1 in the X axis and plus or minus 2 in the Y axis

  let moveOneStepAt;
  let moveTwoStepsAt;
  let random = Math.random();
  if (random > 0.5) {
    moveTwoStepsAt = parseInt(j);
    moveOneStepAt = parseInt(i);
  }else {
    moveTwoStepsAt = parseInt(i);
    moveOneStepAt = parseInt(j);
  }

  // if the knight is near the end of the board the knight cant jump off it so the moves are more limited
  if (moveTwoStepsAt <= 1 || Math.random() > 0.5 && moveTwoStepsAt <= 5) {
    moveTwoStepsAt += 2
  }else {
    moveTwoStepsAt -= 2
  }


  if (moveOneStepAt == 0 || Math.random() > 0.5 && moveOneStepAt != 7) {
    moveOneStepAt += 1;
  }else {
    moveOneStepAt -= 1;
  }

  // getting the new values of i and j
  if (random > 0.5) {
    j = moveTwoStepsAt;
    i = moveOneStepAt;
  }else {
    i = moveTwoStepsAt;
    j = moveOneStepAt;
  }

  return [j, i];
}
