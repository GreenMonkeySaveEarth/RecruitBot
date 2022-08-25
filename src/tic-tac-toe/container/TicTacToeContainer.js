import { TicTacToeContextProvider } from '../hooks/TicTacToeContext';
import GameBoard from './GameBoard';

function TicTacToeContainer() {
    return (
        <TicTacToeContextProvider>
            <div>
                <h1>Tic Tac Toe</h1>
                <GameBoard/>
            </div>
        </TicTacToeContextProvider>
    )
}

export default TicTacToeContainer
