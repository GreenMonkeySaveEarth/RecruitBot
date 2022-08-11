import { useCallback } from 'react';

import { Patterns } from "../constants/Patterns";
import { TicTacToeContext } from './useTicTacToeContext/context'


export function useGameBoardActions() {
    const { state: { board, player }, dispatch } = TicTacToeContext();

    const setBoard = useCallback(
      (board) => {
        dispatch({type: 'setBoard', payload: board})
      }
    , [dispatch]);
    const setResult = useCallback(
      (winner, state) => {
        dispatch({type: 'setResult', payload: {winner, state} })
      }
    , [dispatch]);
    const setPlayer = useCallback(
      (player) => {
        dispatch({type: 'setPlayer', payload: player})
      }
    , [dispatch]);

    const chooseSquare = (square) => {
      setBoard(
        board.map((val, idx) => {
          if (idx === square && val === "") {
            return player;
          }
  
          return val;
        })
      );
    };
    
    const checkWin = () => {
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
    };
  
    const checkIfTie = () => {
      let filled = true;
      board.forEach((square) => {
        if (square === "") {
          filled = false;
        }
      });
  
      if (filled) {
        setResult({ winner: "No One", state: "Tie" });
      }
    };
  
    const restartGame = () => {
      setBoard(["", "", "", "", "", "", "", "", ""]);
      setPlayer("O");
    };

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