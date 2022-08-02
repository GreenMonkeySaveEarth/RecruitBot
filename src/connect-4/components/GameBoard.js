import React, { useState } from "react";
import { c4Columns, c4Rows } from "../constants/index";
import GameRow from "./GameRow";

function GameBoard () {
  const initialBoard = {
    rows: Array.from({ length: c4Rows }, (_, i) => ({
      columns: Array.from({ length: c4Columns }, (_, i) => ({ player: null })),
    })),
  };
  const [board, setBoard] = useState(initialBoard);
  const [currPlayer, setCurrPlayer] = useState(1);

  const updateBoard = (columnIndex) => {
    let boardCopy = board;
    let rowIndex = 0;
    let areColumnsFull = true;
    for (let r = 5; r >= 0; r--) {
      let columnPlayer = boardCopy.rows[r].columns[columnIndex].player;
      if (!columnPlayer) {
        boardCopy.rows[r].columns[columnIndex].player = currPlayer;
        rowIndex = r;
        areColumnsFull = false;
        break;
      }
    }
    if (!areColumnsFull) {
      setBoard(boardCopy);
      setCurrPlayer(currPlayer === 1 ? 2 : 1);
    }
    if (winCheck(rowIndex, columnIndex)) {
      setBoard(initialBoard);
      alert("player " + currPlayer + " wins");
      setCurrPlayer(1);
    } else {
      if (drawCheck()) {
        setBoard(initialBoard);
        alert("Draw");
        setCurrPlayer(1);
      }
    }
  };
  const drawCheck = () => {
    let isBoardFilled =
      board.rows.filter(
        (row) =>
          row.columns.filter((column) => column.player === null)
            .length > 0
      ).length > 0
        ? false
        : true;
    return isBoardFilled;
  };
  const winCheck = (rowIndex, columnIndex) => {
    return (
      checkHorizontal(rowIndex, columnIndex) ||
      checkVertical(rowIndex, columnIndex) ||
      checkDiagonalRight(rowIndex, columnIndex) ||
      checkDiagonalLeft(rowIndex, columnIndex)
    );
  };
  const checkDiagonalLeft = (
    rowIndex,
    columnIndex
  ) => {
    let columnToStartFrom = columnIndex;
    let consecutiveTiles = 0;
    let rowToStartFrom = rowIndex;
    for (let i = 0; i < c4Rows; i++) {
      let column = board.rows[rowIndex - i]?.columns[columnIndex + i];
      if (column) {
        columnToStartFrom = columnIndex + i;
        rowToStartFrom = rowIndex - i;
      } else {
        break;
      }
    }
    for (let j = 0; j < c4Rows; j++) {
      let column =
        board.rows[rowToStartFrom + j]?.columns[columnToStartFrom - j];
      if (column) {
        if (
          column.player === board.rows[rowIndex].columns[columnIndex].player
        ) {
          consecutiveTiles++;
          if (consecutiveTiles >= 4) {
            return true;
          }
        } else {
          consecutiveTiles = 0;
        }
      }
    }
    return false;
  };
  const checkDiagonalRight = (
    rowIndex,
    columnIndex
  ) => {
    let consecutiveTiles = 0;
    let indexDifference = rowIndex - columnIndex;
    let rowToStartFrom = 0;
    let columnToStartFrom = 0;
    if (indexDifference > 0) {
      rowToStartFrom = indexDifference;
    } else if (indexDifference !== 0) {
      columnToStartFrom = Math.abs(indexDifference);
    }
    for (let i = 0; i < c4Rows; i++) {
      let column =
        board.rows[rowToStartFrom + i]?.columns[columnToStartFrom + i];
      if (column) {
        if (
          column.player === board.rows[rowIndex].columns[columnIndex].player
        ) {
          consecutiveTiles++;
          if (consecutiveTiles >= 4) {
            return true;
          }
        } else {
          consecutiveTiles = 0;
        }
      }
    }
    return false;
  };
  const checkVertical = (rowIndex, columnIndex) => {
    let row = board.rows[rowIndex];
    let consecutiveRows = 0;
    for (let r = 0; r < c4Rows; r++) {
      if (
        board.rows[r].columns[columnIndex].player ===
        row.columns[columnIndex].player
      ) {
        consecutiveRows++;
        if (consecutiveRows >= 4) {
          return true;
        }
      } else {
        consecutiveRows = 0;
      }
    }
    return false;
  };
  const checkHorizontal = (rowIndex, columnIndex) => {
    let row = board.rows[rowIndex];
    let consecutiveColumns = 0;
    for (let c = 0; c < c4Columns; c++) {
      if (row.columns[c].player === row.columns[columnIndex].player) {
        consecutiveColumns++;
        if (consecutiveColumns >= 4) {
          return true;
        }
      } else {
        consecutiveColumns = 0;
      }
    }
    return false;
  };
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          setBoard(initialBoard);
        }}
      >
        New Game
      </div>
      <table>
        <thead></thead>
        <tbody>
          {board.rows.map(
            (row, i) => (
              <GameRow key={i} row={row} updateBoard={updateBoard} />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GameBoard
