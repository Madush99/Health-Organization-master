import * as actionTypes from '../actions/actionTypes.js';


export const listOrg = (state = { organizations: [] }, action) => {
    switch (action.type) {
        case actionTypes.ORG_LIST_REQUEST:
            return { loading: true }
        case actionTypes.ORG_LIST_SUCCESS:
            return { loading: false, organizations: action.payload }
        case actionTypes.ORG_LIST_FAIL:
            return { loading: false, error: action.payload }
        case actionTypes.ORG_LIST_RESET:
            return { organizations: [] }
        default:
            return state
    }
}

export const organizationCreate = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ORGANIZATION_REQUEST:
            return { loading: true }
        case actionTypes.CREATE_ORGANIZATION_SUCCESS:
            return { loading: false, organizations: action.payload }
        case actionTypes.CREATE_ORGANIZATION_FAIL:
            return { loading: false, error: action.payload }
        case actionTypes.CREATE_ORGANIZATION_RESET:
            return {}
        default:
            return state

    }
}

export const organizationDetails = (state = { organizations: {} }, action) => {
    switch (action.type) {
        case actionTypes.ORG_BYID_REQUEST:
            return { loading: true }
        case actionTypes.ORG_BYID_SUCCESS:
            return { loading: false, organizations: action.payload }
        case actionTypes.ORG_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}