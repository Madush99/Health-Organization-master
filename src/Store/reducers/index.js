import { combineReducers } from "redux";
import { listOrg, organizationCreate, organizationDetails } from "./organizationReducer.js";
import { userCreate } from "./userReducers.js";


const reducers = combineReducers({

createUser: userCreate,
createOrganization: organizationCreate,
orgList: listOrg,
detailsOrg: organizationDetails,

});


export default reducers;