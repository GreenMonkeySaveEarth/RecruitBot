import "../assets/style.css";
import { useEffect, useRef } from "react";
import Square from "../components/Square";

import { useGameBoardActions } from '../hooks/useGameBoardActions'
import { useUserActions } from '../hooks/TicTacToeContext/User/userAction'
import { useTicTacToeContext } from '../hooks/TicTacToeContext'

function GameBoard() {
  const [state, _] = useTicTacToeContext();
  const {
    useTicTacToeReducer: {
      board, player, result
    },
    useUserReducer: {
      loading, user, error
    }
  } =  state
  
  const initialRenderRef = useRef(true);

  const {
    checkIfTie,
    checkWin,
    chooseSquare,
    restartGame,
    setPlayer,
  } = useGameBoardActions();

  const {
    getUser,
  } = useUserActions();

  useEffect(()=>{
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      getUser();
    }
    // from: https://stackoverflow.com/questions/65693657/running-a-useeffect-once-with-happy-eslint
    // use a react ref hook to force only run at initial
    // and at the same time, apply the eslint rule.
    // this is the same as getUser(); with dependency list empty
  }, [getUser])

  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board, checkIfTie, checkWin, setPlayer]);
  
  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [restartGame, result]);

  return (
    <>
      <div>
        <h2>loading {loading}</h2>
        <h1>total: {user}</h1>
        <h3>{error || 'no error'}</h3>
      </div>
      <div className="board">
      <div className="row">
        <Square
          val={board[0]}
          chooseSquare={() => chooseSquare(0)}
        />
        <Square
          val={board[1]}
          chooseSquare={() => chooseSquare(1)}
        />
        <Square
          val={board[2]}
          chooseSquare={() => chooseSquare(2)}
        />
      </div>
      <div className="row">
        <Square
          val={board[3]}
          chooseSquare={() => chooseSquare(3)}
        />
        <Square
          val={board[4]}
          chooseSquare={() => chooseSquare(4)}
        />
        <Square
          val={board[5]}
          chooseSquare={() => chooseSquare(5)}
        />
      </div>
      <div className="row">
        <Square
          val={board[6]}
          chooseSquare={() => chooseSquare(6)}
        />
        <Square
          val={board[7]}
          chooseSquare={() => chooseSquare(7)}
        />
        <Square
          val={board[8]}
          chooseSquare={() => chooseSquare(8)}
        />
      </div>
    </div>
    </>
  );
}

export default GameBoard