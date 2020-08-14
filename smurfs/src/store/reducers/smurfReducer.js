import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS } from '../actions/smurfActions'

const initialState = {
    name: 'Test Smurf',
    age: 100,
    height: '10cm'
}

export const smurfReducer = (state = initialState, action) =>{
    console.log('smurfReducer state', state)
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                name: "Loading..."
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height
            }

        default:
            return state
    }
}