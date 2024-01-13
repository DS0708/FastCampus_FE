import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6], 
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;

  }
  const winner = calculateWinner(squares);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  }else {
    status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick =(i) => {
    const newSquares = squares.slice();
    
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    // setXIsNext(!xIsNext);  //중복으로 할 경우 한번만 처리가 된다.
    setXIsNext(prev => !prev);
    setSquares(newSquares);
  }

  const renderSquare = (i) => {
    return <Square 
      value={squares[i]}
      onClick = {() => handleClick(i)}
    />
  }


  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board;

// export default class Board extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       squares : Array(9).fill(null)
//       /**
//        * [null, null, null,
//        * null, null, null,
//        * null, null, null ]
//        */
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = 'X';
//     this.setState({squares : squares});
//   }

//   renderSquare(i){
//     return <Square 
//       value={this.state.squares[i]}
//       onClick = {() => this.handleClick(i)}
//     />
//   }

//   render() {
//     return (
//       <div>
//         <div className='status'>Next Player: X, O</div>
//         <div className='board-row'>
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className='board-row'>
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     )
//   }
// }
