const ScoreBoard = (props) => {

  return(
    <div className="score_board">
      <div className="difficulty_box">
        <button
          onClick={() => props.callback(5)}
        >
          Easy: 5
        </button>
        <button
          onClick={() => props.callback(10)}
        >
          Medium: 10
        </button>
        <button
          onClick={() => props.callback(15)}
        >
          Hard: 15
        </button>
      </div>
      <h1>score: {props.score}</h1>
    </div>
  )
}

export default ScoreBoard