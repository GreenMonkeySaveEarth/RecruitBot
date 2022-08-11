
import { TicTacToeContextProvider } from '../hooks/useTicTacToeContext/provider';
import GameBoard from './GameBoard';

export function TicTacToeContainer() {
    return (
        <TicTacToeContextProvider>
            <div>
                <h1>Tic Tac Toe</h1>
                <GameBoard/>
            </div>
        </TicTacToeContextProvider>
    )
}