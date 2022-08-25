import axios from "axios";
import { useCallback } from 'react';

import { useTicTacToeContext } from '../useTicTacToeContext'



export function useUserActions() {
    const dispatchLoading = (dispatch, status) => {
        // an example to extract the dispatch logic into it's own
        dispatch({
            type: 'SET_LOADING',
            payload: status
        })
    }
    const [state, dispatch ] = useTicTacToeContext();
    const setLoading = useCallback((status) => {
        // Wrap this into a function if needed 
        // use the extract logic into its own since, setLoading
        // could contain more than just set loading, but also, such as
        // trigger tracking event etc ...
        // if so, it is better to rename the function so this layer 
        // is more descritive of what is it doing. 
        dispatchLoading(dispatch, status)
        
        
        // dispatch({
        //     type: 'SET_LOADING',
        //     payload: status
        // })
    }, [dispatch])

    const setError = useCallback((error) => {
        dispatch({
            type: 'SET_ERROR',
            payload: {
                error: error.status, message: error.message
            }
        })
    }, [dispatch])

    const getUser = async () => {
        setLoading('roy is loading')
        // do fetching work
        console.log('only oonce.')
        await axios
            .get('https://api.npms.io/v2/search?q=react')
            .then(res => {
                const {results, total} = res.data
                dispatch({
                    type: 'SET_USER',
                    payload: total
                })
                setLoading('loading is done')
            })
            .catch(error => {
                const result = error
                console.log('result: ', result)
                dispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: true,
                        message: result.message
                    }
                })
            })
    }
    
    return {
        getUser,
        setError,
        setLoading
    }
}