import axios from 'axios';
import * as actionTypes from './actionTypes.js';

export const userCreate = (name, email, password) => async (dispatch, getState) =>{
    try {
        dispatch({
            type: actionTypes.CREATE_USER_REQUEST,
        });

        const {data} = await axios.post('http://localhost:6500/api/user/reg', {name, email,password});

        dispatch({
            type: actionTypes.CREATE_USER_SUCCESS,
            payload: data,
        });


    } catch (error) {
        dispatch({
            type: actionTypes.CREATE_USER_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    :error.message,
        });
    }
}

