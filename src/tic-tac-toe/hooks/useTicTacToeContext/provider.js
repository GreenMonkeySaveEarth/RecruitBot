import { useReducer } from 'react';
import { TicTacToeContext } from './context'
import { initialState } from './initialState'
import { reducer } from './reducer'

function TicTacToeContextProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <TicTacToeContext.Provider value={{state, dispatch}}>
            { children }
        </TicTacToeContext.Provider>
    )

}

export default TicTacToeContextProvider