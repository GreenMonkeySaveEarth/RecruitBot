import './assets/style.css';
import GameBoard from './components/GameBoard';
import React from 'react';

function ConnectFour () {
  return (
    <div>
      <h1>Connect Four</h1>
      <GameBoard/>
    </div>
  );
}

export default ConnectFour
