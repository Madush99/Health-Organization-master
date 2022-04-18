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
    const [emailValidError, setEmailValidError] = useState("");
    const [nameValidError, setNameValidError] = useState("");


    const dispatch = useDispatch();

    const createOrganization = useSelector((state) => state.createOrganization);
    const { loading, error, organizations } = createOrganization;

    useEffect(() => {
        if (organizations) {
            alert("Organizations Added successfully");
            window.location.href = '/';
        }
    }, [history,organizations]);


    const submitHandler = () => {
        dispatch(organizationCreate(orgName, email));
    }

    const handleValidName = val => {
        
        if (val.length === 0) {
          setNameValidError('Organzation name must be enter');
        } else if (val.length > 1) {
          setNameValidError('');
        }
      };
    

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
        if (val.length === 0) {
          setEmailValidError('email address must be enter');
        } else if (reg.test(val) === false) {
          setEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
          setEmailValidError('');
        }
      };
    



    return (
        <>

            <ScrollView>
                <View style={styles.form}></View>

                {loading ? (
                    <ActivityIndicator />
                ) : error ? (
                    <View style={styles.containerMeassge}>
                    <Text style={styles.valtext2 }>{error}</Text>
                    </View>
                ) : (
                    <View style={styles.container}>
                        <Text style={styles.heading}>ADD ORGANIZATION</Text>

                        <Text style={styles.heading2}>Enter Organization Name</Text>
                        <TextInput
                            blurOnSubmit={true}
                            reqiured={true}
                            placeholder="Name"
                            style={styles.textinput}
                            autoFocus={true}
                            value={orgName}
                            onChangeText={value => {
                                setOrgName(value)
                                handleValidName(value)
                            }}

                        />
                         { nameValidError ? <Text style={styles.valtext }>{ nameValidError }</Text> : null }
                        <Text style={styles.heading2}>Enter Organization Email</Text>
                        <TextInput
                            blurOnSubmit={true}

                            placeholder="email"
                            style={styles.textinput}
                            autoFocus={true}
                            value={email}
                            onChangeText={value => {
                                setEmail(value);
                                handleValidEmail(value)
                            }}
                        />
                      { emailValidError ? <Text style={styles.valtext }>{ emailValidError }</Text> : null }

                      { emailValidError || nameValidError ? <Button title="Button" disabled={true} onPress={submitHandler} /> : <Button title="Button" onPress={submitHandler} /> }
                        

                    </View>

                )}
            </ScrollView>

        </>
    );
}



export default AddOrganizationScreen;