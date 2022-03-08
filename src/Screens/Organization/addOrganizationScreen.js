import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    Pressable,
    Animated,
    Easing,
    useColorScheme,
    Linking,
    Button
  } from 'react-native';
import { organizationCreate } from '../../Store/actions/oyanizationActions.js';
import styles from '../../Styles/styles.js';
import ActivityIndicator from '../../components/activityIndicator.js';


const AddOrganizationScreen = ({ history }) => {

    const [orgName, setOrgName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const createOrganization = useSelector((state) => state.createOrganization);
    const { loading, error, organizations } = createOrganization;

    useEffect(() => {
        if (organizations) {
            alert('Organizations added sucessfully..');
            window.location.href = '/'
        }
    }, [organizations]);


    const submitHandler = () => {
        dispatch(organizationCreate(orgName, email));
    }



    return (
        <>

            <ScrollView>
                <View style={styles.form}></View>
                {loading && <Text>Loading....</Text>}
                {error && <Text>error..</Text>}

                {loading ? (
                    <ActivityIndicator />
                ) : error ? (
                    <Text>error....</Text>
                ) : (
                    <View style={styles.container}>
                        <Text style={styles.heading}>ADD ORGANIZATION</Text>

                        <Text style={styles.heading2}>Enter Organization Name</Text>
                        <TextInput
                            blurOnSubmit={true}

                            placeholder="Name"
                            style={styles.textinput}
                            autoFocus={true}

                            onChangeText={setOrgName}

                        />
                        <Text style={styles.heading2}>Enter Organization Email</Text>
                        <TextInput
                            blurOnSubmit={true}

                            placeholder="email"
                            style={styles.textinput}
                            autoFocus={true}

                            onChangeText={setEmail}
                        />
                      
                        <Button title="Button" onPress={submitHandler} />

                    </View>

                )}
            </ScrollView>

        </>
    );
}



export default AddOrganizationScreen;