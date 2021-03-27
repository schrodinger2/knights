document.body.onload =  () => {
  let board = document.querySelector(".board");
  for (var i = 0; i < 8; i++) {
    // there are 64 squares in a chess board
    for (var j = 0; j < 8; j++) {
      var newDiv = document.createElement("div");
      newDiv.className = "square";


      if ( (i+j) % 2 == 1) {
        newDiv.classList.add("black");
      }else {
        newDiv.classList.add("white");
      }
      document.body.querySelector(".board").appendChild(newDiv)


      newDiv.classList.add(`j${j}i${i}`); //to ideintify the squares
      // let square = document.body.querySelectorAll(".square")[i*8 + j];
      let square = document.body.querySelector(`.j${j}i${i}`);
      if (square) {
        square.addEventListener('click', () => {
          let knight = document.createElement("div");
          knight.className = "knight";
          square.appendChild(knight)

        });
        }
    }
  }

}
