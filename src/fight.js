import { useState } from 'react';
import newKnights from './movingKnights';

let fightOrStop = true;
const Fight = () => {
  let interval;
  let [text, setText] = useState("Fight");
  const changer = () => {
    if (fightOrStop) {
      interval = setInterval(newKnights, 1000);
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
