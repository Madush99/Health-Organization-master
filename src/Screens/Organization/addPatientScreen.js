import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/activityIndicator.js';
import { addPatientOrg, getOrgDetails } from '../../Store/actions/oyanizationActions.js'
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
import styles from '../../Styles/styles.js';

const AddPatientScreen = () => {

    const [organization, setOrganization] = useState('');
    const [orgId, setOrgId] = useState('');
    const [patientName, setPatientName] = useState('');
    const [patientEmail, setPatientEmail] = useState('');
  
    const dispatch = useDispatch();
    
    const addPatient = useSelector((state) => state.addPatient);
    const { loading, error, orgpatients } = addPatient;

    useEffect(() => {
        if(orgpatients){
          alert('Organizations ptients added sucessfully..');
        }
    }, [])
  
    const submitHandler = () => {
      dispatch(addPatientOrg(organization, orgId, patientName, patientEmail));
    }


  return (
    <>
    { loading ? (
        <Loader />
      ) : error ? (
        <Text> error</Text>
      ) : (
        <>
          <View style={ styles.container }>
            <Text style={ styles.heading }>ADD ORGANIZATION</Text>

            <Text style={ styles.heading2 }>Enter Organization Name</Text>
            <TextInput
              blurOnSubmit={ true }

              placeholder="Name"
              style={ styles.textinput }
              autoFocus={ true }

              onChangeText={ setOrganization }

            />
            <Text style={ styles.heading2 }>Enter Organization Email</Text>
            <TextInput
              blurOnSubmit={ true }

              placeholder="otgID"
              style={ styles.textinput }
              autoFocus={ true }

              onChangeText={ setOrgId }
            />
            <TextInput
              blurOnSubmit={ true }

              placeholder="pname"
              style={ styles.textinput }
              autoFocus={ true }

              onChangeText={ setPatientName }
            />
            <TextInput
              blurOnSubmit={ true }

              placeholder="patiebtemail"
              style={ styles.textinput }
              autoFocus={ true }

              onChangeText={ setPatientEmail }
            />

            <Button title="Button" onPress={ submitHandler } />

          </View>

        </>

      ) }

    </>
  )
}

export default AddPatientScreen