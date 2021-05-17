import DrawingSquares from './square';

const Board = (props) => {
  // const Squares = () => {return <DrawingSquare j={1} i={2} onKnight={props.onKnight}/>;}
  // return <h1 className="wheatlkdn">hello, {props.name}</h1>)
  return (
    // <div className="board"></div>
    <div className="board">
      <DrawingSquares onKnight={props.onKnight}/>
    </div>
    // <DrawingSquare j={2} i={1} onKnight={props.onKnight}/>
  );
}

export default Board;
