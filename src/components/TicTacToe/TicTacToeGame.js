import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Board from './Board';


export default class Game extends Component {
  constructor(props) {
  super(props);
  this.state = {
    history: [
      {
        squares: Array(25).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    isAscending: true
  };
}

handleClick(i) {
  const history = this.state.history.slice(0, this.state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  if (calculateWinner(squares).winner || squares[i]) {
    return;
  }
  squares[i] = this.state.xIsNext ? "X" : "O";
  this.setState({
    history: history.concat([
      {
        squares: squares,
        // Store the index of the latest moved square
        latestMoveSquare: i
      }
    ]),
    stepNumber: history.length,
    xIsNext: !this.state.xIsNext
  });
}

jumpTo(step) {
  this.setState({
    stepNumber: step,
    xIsNext: (step % 2) === 0
  });
}

handleSortToggle() {
  this.setState({
    isAscending: !this.state.isAscending
  });
}

render() {
  const history = this.state.history;
  const stepNumber = this.state.stepNumber;
  const current = history[stepNumber];
  const winInfo = calculateWinner(current.squares);
  const winner = winInfo.winner;

  let moves = history.map((step, move) => {
    const latestMoveSquare = step.latestMoveSquare;
    const col = 1 + latestMoveSquare % 5;
    const row = 1 + Math.floor(latestMoveSquare / 5);
    const desc = move ? 
      `Turn #${move} --> (Row: ${row}, Col: ${col})` :
      'Restart!';
    return (
      <li key={move}>
        {/* Bold the currently selected item */ }
        <button
          className={move === stepNumber ? 'move-list-item-selected' : ''}
          onClick={() => this.jumpTo(move)}>{desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (winInfo.isDraw) {
      status = "Draw";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
  }

  const isAscending = this.state.isAscending;
  if (!isAscending) {
    moves.reverse();
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
          winLine={winInfo.line}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button className="button" onClick={() => this.handleSortToggle()}>
          {isAscending ? 'Descending' : 'Ascending'}
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
const lines = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c, d, e] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
    return {
      winner: squares[a],
      line: lines[i],
      isDraw: false,
    };
  }
}

let isDraw = true;
for (let i = 0; i < squares.length; i++) {
  if (squares[i] === null) {
    isDraw = false;
    break;
  }
}
return {
  winner: null,
  line: null,
  isDraw: isDraw,
};
}
