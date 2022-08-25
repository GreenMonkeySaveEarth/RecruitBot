export const useReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER': // P2. Use this from a constant file.
            return {
                ...state, 
                user: action.payload
            }
            
        case 'SET_ERROR':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_LOADING':
            return {
                ...state, 
                loading: action.payload
            };
        default:
            return state;
    }
}