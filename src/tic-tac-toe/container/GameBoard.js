import "../assets/style.css";
import { useCallback, useEffect } from "react";
import Square from "../components/Square";

import { useGameBoardActions } from '../hooks/useGameBoardActions'
import { TicTacToeContext } from '../hooks/useTicTacToeContext'

function GameBoard() {
  const { 
    state: { 
      board, player, result
    } 
  } = TicTacToeContext();
  const {
    checkIfTie,
    checkWin,
    chooseSquare,
    restartGame,
    setPlayer,
  } = useGameBoardActions();

  const onClick = useCallback((squareIdx)=>{
    chooseSquare(squareIdx)
  }, [chooseSquare])


  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board, checkIfTie, checkWin, player, setPlayer]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [restartGame, result]);


  return (
    <div className="board">
      <div className="row">
        <Square
          val={board[0]}
          chooseSquare={onClick(0)}
        />
        <Square
          val={board[1]}
          chooseSquare={onClick(1)}
        />
        <Square
          val={board[2]}
          chooseSquare={onClick(2)}
        />
      </div>
      <div className="row">
        <Square
          val={board[3]}
          chooseSquare={onClick(3)}
        />
        <Square
          val={board[4]}
          chooseSquare={onClick(4)}
        />
        <Square
          val={board[5]}
          chooseSquare={onClick(5)}
        />
      </div>
      <div className="row">
        <Square
          val={board[6]}
          chooseSquare={onClick(6)}
        />
        <Square
          val={board[7]}
          chooseSquare={onClick(7)}
        />
        <Square
          val={board[8]}
          chooseSquare={onClick(8)}
        />
      </div>
    </div>
  );
}

export default GameBoard