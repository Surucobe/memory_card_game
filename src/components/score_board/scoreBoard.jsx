const ScoreBoard = (props) => {

  return(
    <div className="score_board">
      <div className="difficulty_box">
        <button>Easy: 10</button>
        <button>Medium: 15</button>
        <button>Hard: 20</button>
      </div>
      <h1>score: {props.score}</h1>
    </div>
  )
}

export default ScoreBoard