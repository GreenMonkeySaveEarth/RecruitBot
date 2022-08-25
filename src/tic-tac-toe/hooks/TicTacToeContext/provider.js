import { useReducer, useMemo } from 'react';
import { TicTacToeContext } from './context'
import { initialState as tictactoeInitialState } from './initialState'
import { reducer as useTicTacToeReducer } from './reducer'
import { useReducer as useUserReducer } from './User/userReducer'
import { initialState as userInitialState } from './User/initialState'

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

// Quick example of combine multiple reducers
function TicTacToeContextProvider ({ children }) {
    const rootInitialState = {useTicTacToeReducer: tictactoeInitialState, useUserReducer: userInitialState }
    const rootReducer = combineReducers({useTicTacToeReducer, useUserReducer})
    const [state, dispatch] = useReducer(rootReducer, rootInitialState);
    // Important(!): memoize array value. Else all context consumers update on *every* render
    const store = useMemo(() => [state, dispatch], [state])
    return (
      <TicTacToeContext.Provider value={store}>
        { children }
      </TicTacToeContext.Provider>
    )
}

export default TicTacToeContextProvider
