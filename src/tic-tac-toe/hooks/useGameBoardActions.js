import { useCallback } from 'react';

import { Patterns } from "../constants/Patterns";
import { useTicTacToeContext } from './TicTacToeContext/useTicTacToeContext'


export function useGameBoardActions() {
    const [state, dispatch ] = useTicTacToeContext();
    const {
        useTicTacToeReducer: { 
          board, player 
        }
    } = state
    const setBoard = useCallback(
      (board) => {
        dispatch({type: 'setBoard', payload: board})
      }
    , [dispatch]);
    const setResult = useCallback(
      ({winner, state}) => {
        dispatch({type: 'setResult', payload: {winner, state} })
      }
    , [dispatch]);
    const setPlayer = useCallback(
      (player) => {
        dispatch({type: 'setPlayer', payload: player})
      }
    , [dispatch]);
    const chooseSquare = useCallback((square) => {
      setBoard(
        board.map((val, idx) => {
          if (idx === square && val === "") {
            return player;
          }
  
          return val;
        })
      );
    }, [board, player, setBoard]);
    
    const checkWin = useCallback(() => {
      Patterns.forEach((currPattern) => {
        const firstPlayer = board[currPattern[0]];
        if (firstPlayer === "") return;
        let foundWinningPattern = true;
        currPattern.forEach((idx) => {
          if (board[idx] !== firstPlayer) {
            foundWinningPattern = false;
          }
        });
  
        if (foundWinningPattern) {
          setResult({ winner: player, state: "Won" });
        }
      });
    }, [board, setResult]);
  
    const checkIfTie = useCallback(() => {
      let filled = true;
      board.forEach((square) => {
        if (square === "") {
          filled = false;
        }
      });
  
      if (filled) {
        setResult({ winner: "No One", state: "Tie" });
      }
    }, [board, setResult]);
  
    const restartGame = useCallback(() => {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setPlayer("X");
    }, [setBoard, setPlayer]);
    
    return {
      checkIfTie,
      checkWin,
      chooseSquare,
      restartGame,
      setBoard,
      setPlayer,
      setResult,
    }

}