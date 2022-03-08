import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../Screens/homeScreem.js';
import AddUserScreen from '../Screens/User/addUserScreen.js';
import AddOrganizationScreen from '../Screens/Organization/addOrganizationScreen.js'
import OrganizationHomeScreen from '../Screens/Organization/organizationHomeScreen.js';
import OrganizationScreen from '../Screens/Organization/organizationScreen.js';
import AddPatientScreen from '../Screens/Organization/addPatientScreen.js';
import UpdateOrgScreen from '../Screens/Organization/updateOrgScreen.js';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={ <OrganizationHomeScreen /> } />
                <Route path='/home' element={ <HomeScreen /> } />
                <Route path='/adduser' element={ <AddUserScreen /> } />
                <Route path='/addorganization' element={ <AddOrganizationScreen /> } />
                <Route path='/org/:id' element={ <OrganizationScreen /> } />
                <Route path='/path' element={ <AddPatientScreen /> } />
                <Route path='/org/update/:id' element={ <UpdateOrgScreen /> } />
            </Routes>
        </Router>
    )

}


export default App;