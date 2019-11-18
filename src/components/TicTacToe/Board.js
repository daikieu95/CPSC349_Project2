import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Square from './Square';

export default class Board extends Component {
  renderSquare(i) {
    const winLine = this.props.winLine;
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={winLine && winLine.includes(i)}
      />
    );
  }

  render() {
    // Use two loops to make the squares
    const boardSize = 5;
    let squares = [];
    for (let i = 0; i < boardSize; ++i) {
      let row = [];
      for (let j = 0; j < boardSize; ++j) {
        row.push(this.renderSquare(i * boardSize + j));
      }
      squares.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
  <div>
      <div>
        {squares}
        <br />
      </div>
    <center> <a href="http://localhost:3000/main#/main">Quit !</a> </center>
  </div>
    );
  }
}
