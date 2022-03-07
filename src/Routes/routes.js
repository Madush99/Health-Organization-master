import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../Screens/homeScreem.js';
import AddUserScreen from '../Screens/User/addUserScreen.js';
import AddOrganizationScreen from '../Screens/Organization/addOrganizationScreen.js'




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/home' element={ <HomeScreen /> } />
                <Route path='/adduser' element={ <AddUserScreen /> } />
                <Route path='/addorganization' element={ <AddOrganizationScreen /> } />
            </Routes>
        </Router>
    )

}


export default App;