//opacity decreasing effect
let full = 1
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    full -= 0.1
    document.querySelector(".read").style.opacity = full;
  }, i * 150 + 550);
}

let boardLength = 8;
let checked = true;
document.body.onload = drawingBoard

function drawingBoard() {

  //making the squares
  for (var i = 0; i < boardLength; i++) {
    // there are 64 squares in a chess board
    for (var j = 0; j < boardLength; j++) {
      let newSquare = document.createElement("div");
      newSquare.className = "square";

      //styling the square one black and one white
      if ((i + j) % 2 == 1) {
        newSquare.classList.add("black");
      } else {
        newSquare.classList.add("white");
      }
      document.body.querySelector(".board").appendChild(newSquare)

      newSquare.classList.add(`j${j}i${i}`); //to ideintify the squares
      newSquare.addEventListener('click', makeKnight);

      // you pass in the color of the desired knight then it creates that knight
      function makeKnight() {
        if (!newSquare.hasChildNodes()) {
          let svg = `<svg version="1.1" class="knight" style=${fill} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path d="M40,44.5H12v-0.54c0-0.81,0.65-1.46,1.46-1.46h25.08c0.81,0,1.46,0.65,1.46,1.46V44.5z"/><path d="M38.5,41.5h-25c0-0.55,0.22-1.05,0.59-1.41c0.36-0.37,0.86-0.59,1.41-0.59h21C37.6,39.5,38.5,40.4,38.5,41.5z"/><path d="M34.5,28c0,3.25-0.31,6.42-0.91,9.5H19.63c1.21-2.93,1.87-6.14,1.87-9.5c0-2.31-0.31-4.55-0.91-6.68C20.56,21.56,19.92,25.94,17,24c-3-2-9,3-9,3l-1-2c0,0,1-5,10.08-11.19C26.16,7.62,28.4,4.06,28.4,4.06C32.29,11.17,34.5,19.33,34.5,28z"/></svg>`;
          newSquare.innerHTML = svg;
        }
      }
    }
  }
}

let fill = "fill:#000";
document.querySelector("#checkbox").addEventListener('change', () => {
  if (checked) {
    fill = "fill:#fff";
    checked = false;
  } else {
    fill = "fill:#000";
    checked = true;
  }
});

let movementSpeed = 700;

document.querySelector("#down").addEventListener('click', () => {
  movementSpeed *= 1.1;
});

document.querySelector("#up").addEventListener('click', () => {
  movementSpeed *= 0.9;
});

let fightOrStop = true;
let interval;

function fight() {
  if (fightOrStop) {
    interval = setInterval(movingKnights, movementSpeed);
    document.body.querySelector(".fight").textContent = 'Stop';
    fightOrStop = false;
  } else {
    clearInterval(interval);
    document.body.querySelector(".fight").textContent = 'Fight';
    fightOrStop = true;
  }
}



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
  doubleKnights(); //checks if a square has several knights on it
}




function doubleKnights() {
  let squaresList = document.body.querySelectorAll(".square");
  for (var i = 0; i < squaresList.length; i++) {
    if (squaresList[i].hasChildNodes()) {
      let children = squaresList[i].childNodes;
      if (children.length > 1) {
        squaresList[i].removeChild(squaresList[i].firstChild);
      }
    }
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

  return [j, i];
}
