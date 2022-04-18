import React, { useRef, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform,
    Pressable,
    Animated,
    Easing,
    useColorScheme,
    Linking,
} from 'react-native';
import logo from './logo.png';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import { Provider } from 'react-native-paper';


const App = () => {


    return (
        <SafeAreaView style={ styles.scrollView }>
            <ScrollView>
                <NativeRouter>
                    <Routes>
                        <Route path='/' exact element={ <OrganizationHomeScreen /> } />
                        <Route path='/home' element={ <HomeScreen /> } />
                        <Route path='/adduser' element={ <AddUserScreen /> } />
                        <Route path='/addorganization' element={ <AddOrganizationScreen /> } />
                        <Route path='/org/:id' element={ <OrganizationScreen /> } />
                        <Route path='/path' element={ <AddPatientScreen /> } />
                        <Route path='/org/update/:id' element={ <UpdateOrgScreen /> } />
                    </Routes>
                </NativeRouter>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 300,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        color: '#fff',
    },
    link: {
        color: '#1B95E0',
    },
    button: {
        borderRadius: 3,
        padding: 20,
        marginVertical: 10,
        marginTop: 10,
        backgroundColor: '#1B95E0',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});


export default App;
