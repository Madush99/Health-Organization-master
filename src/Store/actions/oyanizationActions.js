import axios from  'axios';
import * as actionTypes from './actionTypes.js';

export const listOrg = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.ORG_LIST_REQUEST,
        });

        const {data} = await axios.post('http://localhost:6500/api/organization/allOrganizations');

        dispatch({
            type: actionTypes.ORG_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.ORG_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}

export const organizationCreate = (orgName, email) => async (dispatch, getState) => {
    try {
        dispatch ({
            type: actionTypes.CREATE_ORGANIZATION_REQUEST,
        });

        const {data} = await axios.post('http://localhost:6500/api/organization/createOrg', {orgName, email});

        dispatch({
            type: actionTypes.CREATE_ORGANIZATION_SUCCESS,
            paylod: data,
        });

    } catch (error) {
        dispatch({
            type: actionTypes.CREATE_ORGANIZATION_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}

