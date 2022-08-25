export const reducer = (state, action) => {
    switch (action.type) {
      case "setBoard":
        return {
          ...state,
          board: action.payload
        };
      case "setResult":
        return {
          ...state,
          result: {
            winner: action.payload.winner,
            state: action.payload.state
          }
        };
      case "setPlayer":
        return {
          ...state,
          player: action.payload
          
        };
      default:
        return state;
    }
  };