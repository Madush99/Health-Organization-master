import axios from  'axios';
import * as actionTypes from './actionTypes.js';

export const listOrg = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.ORG_LIST_REQUEST,
        });

        const {data} = await axios.get('http://localhost:6500/api/organization/allOrganizations');

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
        
       console.log(error.response.data)
    }
}

export const addPatientOrg = (orgsName, orgId, patientName, patientEmail) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.ADD_ORGUSER_REQUEST,
        });

        const {data} = await axios.post('http://localhost:6500/api/orgPatient/addPatient', {orgsName, orgId, patientName, patientEmail});

        dispatch({
            type: actionTypes.ADD_ORGUSER_SUCCESS,
            payload: data
        })
     
    } catch (error) {
        dispatch({
            type: actionTypes.ADD_ORGUSER_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}


export const getOrgDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.ORG_BYID_REQUEST,
        });

        const { data } = await axios.get(`http://localhost:6500/api/organization/${id}`);

        dispatch({
            type: actionTypes.ORG_BYID_SUCCESS,
            payload: data
        })

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


export const deleteOrganization = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.DELETE_ORGANIZATION_REQUEST,
        });

        await axios.delete(`http://localhost:6500/api/organization/${id}`);
        dispatch({
            type: actionTypes.DELETE_ORGANIZATION_SUCCESS,
        });
    }catch (error) {
        dispatch({
            type: actionTypes.DELETE_ORGANIZATION_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}

export const orgUpdate = (organizations) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.UPDATE_ORGANIZATION_REQUEST,
        });

        const {data} = await axios.put(`http://localhost:6500/api/organization/${organizations._id}`, organizations);
        
        dispatch({
            type: actionTypes.UPDATE_ORGANIZATION_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: actionTypes.UPDATE_ORGANIZATION_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}