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
import { ScrollView, TextInput } from 'react-native-web';
import styles from '../../Styles/styles.js';



const OrganizationScreen = () => {

  const { id } = useParams();

  const [orgId, setOrgId] = useState(id);
  const [orgsName, setorgsName] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState("");

  const dispatch = useDispatch();

  const detailsOrg = useSelector((state) => state.detailsOrg);
  const { loading, error, organizations } = detailsOrg;

  const addPatient = useSelector((state) => state.addPatient);
  const { loading: addloading, error: adderror, orgpatients } = addPatient;


  useEffect(() => {

    if (!organizations || !organizations.orgName || organizations._id !== id) {
      dispatch(getOrgDetails(id))
    } else {
      setorgsName(organizations.orgName)
    }


  }, [dispatch, organizations,orgpatients]);

  useEffect(() => {
    if (orgpatients) {
      alert('Organizations patients added sucessfully..');
      window.location.href = '/'
    }
  }, [orgpatients])

  const submitHandler = () => {
    dispatch(addPatientOrg(orgsName, orgId, patientName, patientEmail));
  }

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
        <View style={ styles.form }></View>
        { addloading && <Loader /> }
        { adderror && <View style={ styles.containerMeassge }>
          <Text style={ styles.valtext2 }>{adderror}</Text>
        </View> }

        { loading ? (
          <Loader />
        ) : error ? (
          <View style={ styles.containerMeassge }>
            <Text style={ styles.valtext2 }>{error}</Text>
          </View>
        ) : (
          <>
            <View style={ styles.form }></View>
            <View style={ styles.container }>
              <Text style={ styles.heading }>ADD PATIENT TO ORGANIZATION</Text>


              <Text style={ styles.heading2 }>Organization Email</Text>
              <TextInput
                blurOnSubmit={ true }
                placeholder="email"
                style={ styles.textinput }
                autoFocus={ true }
                value={ orgsName }
                onChangeText={ setorgsName }
                editable={false}
              />
              <Text style={ styles.heading2 }>Enter patient name</Text>
              <TextInput
                blurOnSubmit={ true }

                placeholder="Patient Name"
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
                value={ patientEmail }
                onChangeText={ value => {
                  setPatientEmail(value);
                  handleValidEmail(value);
                } }
              />
              { emailValidError ? <Text style={ styles.valtext }>{ emailValidError }</Text> : null }
              { emailValidError ? <Button title="Button" disabled={ true } onPress={ submitHandler } /> : <Button title="Button" onPress={ submitHandler } /> }

            </View>


          </>

        ) }

      </ScrollView>

    </>
  )
}

export default OrganizationScreen