import DrawingBoard from './board.js';
import Fight from './fight.js';

const App = () => {
  return (
    <>
    <div className="board">
      <DrawingBoard />
    </div>
    <div className="card">
      <Fight />
    </div>
    </>
  );
}

export default App;
