import { FETCH_USER_REQUEST, FETCH_USER_SUCESS, FETCH_USER_FAIL } from './userTypes'

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCESS:
            return {

                loading: false,
                users: action.payload,
                user: ''
            }
        case FETCH_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}
export default useReducer