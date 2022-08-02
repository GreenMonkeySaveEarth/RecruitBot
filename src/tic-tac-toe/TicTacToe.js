import './assets/style.css';
import GameBoard from './components/GameBoard';
import React from 'react';

export function TicTacToe () {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <GameBoard/>
    </div>
  );
}
