import * as actionTypes from '../actions/actionTypes.js'

export const userCreate= (state ={}, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER_REQUEST:
            return {loading: true}
        case actionTypes.CREATE_USER_SUCCESS:
            return {loading : false, users: action.payload}
        case actionTypes.CREATE_USER_FAIL:
            return {loading: false, error: action.payload}
        case actionTypes.CREATE_USER_RESET:
            return {}
        default:
            return state
    }
}