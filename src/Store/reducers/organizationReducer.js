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

export const addOrgPatient = (state = {}, actions) => {
    switch (actions.type) {
        case actionTypes.ADD_ORGUSER_REQUEST:
            return { loading: true }
        case actionTypes.ADD_ORGUSER_SUCCESS:
            return { loading: false, orgpatients: actions.payload }
        case actionTypes.ADD_ORGUSER_FAIL:
            return { loading: false, error: actions.payload }
        case actionTypes.ADD_ORGUSER_RESET:
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

export const organizationDelete = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.DELETE_ORGANIZATION_REQUEST:
            return { loading: true }
        case actionTypes.DELETE_ORGANIZATION_SUCCESS:
            return { loading: false, success: true }
        case actionTypes.DELETE_ORGANIZATION_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const orgUpdate = (state = {organizations: {} }, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_ORGANIZATION_REQUEST:
                  return { loading: true }
            case actionTypes.UPDATE_ORGANIZATION_SUCCESS:
                  return { loading: false, success: true, organizations: action.payload }
            case actionTypes.UPDATE_ORGANIZATION_FAIL:
                  return { loading: false, error: action.payload }
            case actionTypes.UPDATE_ORGANIZATION_RESET:
                  return {
                        rooms: {}
                  }
            default:
                  return state
    }
}
