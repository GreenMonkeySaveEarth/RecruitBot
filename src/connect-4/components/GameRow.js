import React from "react";
import Tile from "./Tile";

const GameRow = ({
  row,
  updateBoard
}) => {
  return (
    <tr>
      {row.columns.map(
        (column, i) => (
          <Tile key={i} column={column} columnIndex={i} updateBoard={updateBoard}/>
        )
      )}
    </tr>
  );
};
export default GameRow;
