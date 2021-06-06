import { useState } from 'react';

let fightOrStop = true;

let interval;
const Fight = ({onNewIteration, movementSpeed}) => {
  let [text, setText] = useState("Fight");
  const changer = () => {
    if (fightOrStop) {
      interval = setInterval(() => onNewIteration(), movementSpeed);
      setText(prevText => prevText = "Stop");
      fightOrStop = false;
    }else {
      clearInterval(interval);
      setText(prevText => prevText = "Fight");
      fightOrStop = true;
    }
  };
  return <button id="fight" className="btn one-part" onClick={changer} >{text}</button>;
}

export default Fight
