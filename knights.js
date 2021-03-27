let board = document.querySelector(".board");
document.body.onload =  () => {
  for (var i = 0; i < 64; i++) {
    // there are 64 squares in a chess board
      var newDiv = document.createElement("div");
      newDiv.className = "square";
      if (i % 2 == 1) {
        newDiv.classList.add("black");
      }else {
        newDiv.classList.add("white");
      }
  // document.board.appendChild(newDiv)
  }

}
