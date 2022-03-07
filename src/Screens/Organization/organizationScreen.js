import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/activityIndicator.js';
import { addPatientOrg, getOrgDetails } from '../../Store/actions/oyanizationActions.js'
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../../Styles/styles.js';

import { TextInput } from 'react-native-paper';


const OrganizationScreen = () => {

  const { id } = useParams();

  const [organization, setOrganization] = useState('');
  const [orgId, setOrgId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');

  const dispatch = useDispatch();

  const detailsOrg = useSelector((state) => state.detailsOrg);
  const { loading, error, organizations } = detailsOrg;

  const addPatient = useSelector((state) => state.addPatient);
  const { loading: addloading, error: adderror, orgpatients } = addPatient;


  useEffect(() => {
    dispatch(getOrgDetails(id));
   
  }, [dispatch]);

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
     
     { loading || addloading ? (
        <Loader />
      ) : error || adderror ? (
        <Text> error</Text>
      ) : (
        <>
        <View style={ styles.form }></View>
          <View style={ styles.container }>
            <Text style={ styles.heading }>ADD ORGANIZATION</Text>

            
            <Text style={ styles.heading2 }>Organization ID</Text>
            <TextInput
              blurOnSubmit={ true }
              type='hidden'
              style={ styles.textinput }
              autoFocus={ true }
              value={organizations._id}
              onChangeText={ setOrgId }
            />
            <Text style={ styles.heading2 }>Organization Name</Text>
            <TextInput
              blurOnSubmit={ true }
              style={ styles.textinput }
             
              value={organizations.orgName}
              onChangeText={ setOrganization }
              hidden = 'true'

            />
            <Text style={ styles.heading2 }>Enter Patients Name</Text>
            <TextInput
              blurOnSubmit={ true }

              placeholder="pname"
              style={ styles.textinput }
              autoFocus={ true }

              onChangeText={ setPatientName }
            />
             <Text style={ styles.heading2 }>Enter Patients Email</Text>
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

export default OrganizationScreen