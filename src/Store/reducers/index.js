import { combineReducers } from "redux";
import { organizationCreate } from "./organizationReducer.js";
import { userCreate } from "./userReducers.js";


const reducers = combineReducers({

createUser: userCreate,
createOrganization: organizationCreate,

});


export default reducers;