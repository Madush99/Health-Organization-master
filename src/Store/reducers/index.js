import { combineReducers } from "redux";
import { listOrg, organizationCreate, organizationDetails,addOrgPatient,orgUpdate,organizationDelete } from "./organizationReducer.js";
import { userCreate } from "./userReducers.js";


const reducers = combineReducers({

createUser: userCreate,
createOrganization: organizationCreate,
orgList: listOrg,
detailsOrg: organizationDetails,
addPatient: addOrgPatient,
updateOrg: orgUpdate,
deleteOrg: organizationDelete
});


export default reducers;