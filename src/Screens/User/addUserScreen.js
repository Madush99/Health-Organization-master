import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { useDispatch, useSelector } from 'react-redux';
import { userCreate } from '../../Store/actions/userActions.js';
import styles from '../../Styles/styles.js';
import ActivityIndicator from '../../components/activityIndicator.js';


const AddUserScreen = ({ history }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  // const [confirmPassword, setConfirmPassword] = useState("")

  const [emailValidError, setEmailValidError] = useState("");
  const [passwordValidError, setPasswordValidError] = useState("")
  // const [confirmPasswordValidError, setConfirmPasswordValidError] = useState("")

  const dispatch = useDispatch();

  const createUser = useSelector((state) => state.createUser);
  const { loading, error, users } = createUser;



  useEffect(() => {

    if (users) {
      alert('User added sucessfully..');
      window.location.href = '/'
    }

  }, [history, users]);

  const submitHandler = () => {
    dispatch(userCreate(name, email, password))


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




  const handleValidPassword = val => {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (val.length === 0) {
      setPasswordValidError('password must be enter');
    } else if (reg.test(val) === false) {
      setPasswordValidError('enter valid email address');
    } else if (reg.test(val) === true) {
      setPasswordValidError('');
    }
  };

  // const handleconfirmPassword = (value) => {
  //   if(password === confirmPassword){
  //     setConfirmPasswordValidError(' ')
  //   }else if (password !== confirmPassword) {
  //     setConfirmPasswordValidError('fdfsdg')
  //   }
  // }

  const nextFocus = React.useRef(null);

  const focusNextField = () => {
    if (nextFocus.current != null) {
      nextFocus.current.focus();
    }
  };


  return (
    <>

      <ScrollView>
        <View style={ styles.form }></View>

        { loading ? (
          <ActivityIndicator />
        ) : error ? (
          <View style={ styles.containerMeassge }>
            <Text style={ styles.valtext2 }>Error..Must  fill the  form</Text>
          </View>
        ) : (
          <View style={ styles.container }>
            <Text style={ styles.heading }>Register  User</Text>

            <Text style={ styles.heading2 }>Enter Your Name</Text>
            <TextInput
              blurOnSubmit={ true }
             
              placeholder="Name"

              style={ styles.textinput }
              autoFocus={ true }

              onChangeText={ setName }

            />
            <Text style={ styles.heading2 }>Enter Your Email</Text>
            <TextInput
              blurOnSubmit={ true }

              placeholder="email"
              style={ styles.textinput }
              autoFocus={ true }
              type="email"
              value={ email }
              onChangeText={ value => {
                setEmail(value);
                handleValidEmail(value)
              } }
            />
            { emailValidError ? <Text style={ styles.valtext }>{ emailValidError }</Text> : null }
            <Text style={ styles.heading2 }>Enter Your Password</Text>
            <TextInput
              blurOnSubmit={ true }
              type="password"
              placeholder="password"
              style={ styles.textinput }
              autoFocus={ true }
              value={ password }
              onChangeText={ value => {
                setPassword(value);
                handleValidPassword(value)
              } }
            />
            <View></View>
            { passwordValidError ? <Text style={ styles.valtext }>{ passwordValidError }</Text> : null }
            {/*         
            <Text style={ styles.heading2 }>Confirm Your Password</Text>
            <TextInput
              blurOnSubmit={ true }
              onSubmitEditing={ () => focusNextField() }
              placeholder="confirm password"
              style={ styles.textinput }
              autoFocus={ true }
              value={confirmPassword}
              onChangeText={ value => {
                setConfirmPassword(value);
                
              }
              }
            />
            
            {confirmPasswordValidError ? <Text style={styles.valtext}>{ confirmPasswordValidError}</Text>: null} */}
            <View style={ styles.form }></View>
            { emailValidError || passwordValidError ? <Button title="Button" disabled={ true } onPress={ submitHandler } /> : <Button title="Button" onPress={ submitHandler } /> }
          </View>

        ) }
      </ScrollView>

    </>
  );
}



export default AddUserScreen;

