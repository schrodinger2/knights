import { useState } from 'react';

let fightOrStop = true;

let interval;
const Fight = ({onNewIteration}) => {
  let [text, setText] = useState("Fight");
  const changer = () => {
    if (fightOrStop) {
      interval = setInterval(() => onNewIteration(), 1000);
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
