import { createContext } from 'react';
import { initialState } from './initialState'

export const TicTacToeContext = createContext(initialState)