const SpeedController = ({changeMovementSpeed}) => {
  return (
    <div className="btn parts">
    <div className="side" id="up" onClick={() => changeMovementSpeed(false)}>
      <svg version="1.1" className="up-down"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 64 64" style={{ enableBackground: "new 0 0 64 64"}} xmlSpace="preserve">
        <polygon className="st0" points="31.5,13.5 11.58,48 51.42,48 	"/>
      </svg>
    </div>
    <div className="middle">speed</div>
    <div className="side" id="down" onClick={() => changeMovementSpeed(true)}>
      <svg version="1.1" className="up-down"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 64 64" style={{ enableBackground: "new 0 0 64 64"}} xmlSpace="preserve">
        <polygon className="st0" points="31.5,48 11.58,13.5 51.42,13.5 	"/>
      </svg>
    </div>
  </div>
  )
}

export default SpeedController;
