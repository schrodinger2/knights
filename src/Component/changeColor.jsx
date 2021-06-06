const ColorChanger = ({changeFill}) => {
  return (
    <div className="btn parts">
      <div className="first">Color</div>
      <div className="side">
        <input type="color" onChange={ changeFill } id="color"/>
      </div>
    </div>
  )
}

export default ColorChanger;
