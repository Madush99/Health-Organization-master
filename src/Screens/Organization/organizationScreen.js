import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/activityIndicator.js';
import { addPatientOrg, getOrgDetails } from '../../Store/actions/oyanizationActions.js'
import {
  Text,
  View,
  Button,
} from 'react-native';
import { TextInput } from 'react-native-web';
import styles from '../../Styles/styles.js';



const OrganizationScreen = () => {

  const { id } = useParams();

  const [orgId, setOrgId] = useState(id);
  const [orgsName, setorgsName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');

  const dispatch = useDispatch();

  const detailsOrg = useSelector((state) => state.detailsOrg);
  const { loading, error, organizations } = detailsOrg;

  const addPatient = useSelector((state) => state.addPatient);
  const { loading: addloading, error: adderror, orgpatients } = addPatient;


  useEffect(() => {

    if (!organizations||!organizations.orgName || organizations._id !== id) {
      dispatch(getOrgDetails(id))
  } else {
      setorgsName(organizations.orgName)
  }


  }, [dispatch, organizations]);

  useEffect(() => {
    if (orgpatients) {
      alert('Organizations ptients added sucessfully..');
    }
  }, [orgpatients])

  const submitHandler = () => {
    dispatch(addPatientOrg(orgsName, orgId, patientName, patientEmail));
  }

  return (
    <>

      { addloading && <Text>Loading....</Text> }
      { adderror && <Text>error..</Text> }

      { loading ? (
        <Loader />
      ) : error ? (
        <Text> error</Text>
      ) : (
        <>
          <View style={ styles.form }></View>
          <View style={ styles.container }>
            <Text style={ styles.heading }>ADD ORGANIZATION</Text>

          
            <Text style={ styles.heading2 }>Enter Organization Email</Text>
            <TextInput
              blurOnSubmit={ true }
              placeholder="email"
              style={ styles.textinput }
              autoFocus={ true }
              value={orgsName}
              onChangeText={setorgsName}
            />
            <Text style={ styles.heading2 }>Enter patient name</Text>
            <TextInput
              blurOnSubmit={ true }

              placeholder="email"
              style={ styles.textinput }
              autoFocus={ true }
              onChangeText={ setPatientName }
            />
            <Text style={ styles.heading2 }>Enter pateint Email</Text>
            <TextInput
              blurOnSubmit={ true }

              placeholder="email"
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