import { useContext } from "react";
import { TicTacToeContext } from "./context"

export const useTicTacToeContext = () => {
    const context = useContext(TicTacToeContext);
    return context
}