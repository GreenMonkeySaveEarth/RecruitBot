import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <p>Visit: <Link to="/tictactoe"> to play game: Tic Tac Toe</Link></p>
        <p>Visit: <Link to="/connect4"> to play game: Connect 4</Link></p>
        <p>Please read README under the root directoy for future improvements.</p>
      </div>
    </>

  );
}

export default Home;