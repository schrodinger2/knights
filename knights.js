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
    }
  }

}
