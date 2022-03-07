import { combineReducers } from "redux";
import { listOrg, organizationCreate } from "./organizationReducer.js";
import { userCreate } from "./userReducers.js";


const reducers = combineReducers({

createUser: userCreate,
createOrganization: organizationCreate,
orgList: listOrg,
});


export default reducers;