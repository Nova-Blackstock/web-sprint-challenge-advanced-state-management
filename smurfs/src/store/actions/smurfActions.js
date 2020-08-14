import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'

export const fetchSmurf = () => (dispatch) =>{
    dispatch({ type: FETCH_SMURF_START })
    
    axios.get('http://localhost:3333/smurfs')
        .then(res =>{
        console.log(res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err =>{
        console.log(err.message)
        })

    const thunk = (store) => (next) => (action) =>{
        if (typeof action === 'object'){
            next(action);
        }else if(typeof action === 'function'){
            action(store.dispatch)
        }
    }
}