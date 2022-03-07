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

  const dispatch = useDispatch();

  const createUser = useSelector((state) => state.createUser);
  const { loading, error, users } = createUser;



  useEffect(() => {

    if (users) {
      alert('User added sucessfully..');
      history.push('/');
    }

  }, [history, users]);

  const submitHandler = () => {

    dispatch(userCreate(name, email, password))
  }


  const nextFocus = React.useRef(null);

  const focusNextField = () => {
    if (nextFocus.current != null) {
      nextFocus.current.focus();
    }
  };

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
            <Text style={styles.heading}>Register  User</Text>

            <Text style={styles.heading2}>Enter Your Name</Text>
            <TextInput
              blurOnSubmit={true}

              placeholder="Name"
              style={styles.textinput}
              autoFocus={true}

              onChangeText={setName}

            />
            <Text style={styles.heading2}>Enter Your Email</Text>
            <TextInput
              blurOnSubmit={true}

              placeholder="email"
              style={styles.textinput}
              autoFocus={true}

              onChangeText={setEmail}
            />
            <Text style={styles.heading2}>Enter Your Password</Text>
            <TextInput
              blurOnSubmit={true}

              placeholder="password"
              style={styles.textinput}
              autoFocus={true}

              onChangeText={setPassword}
            />

            <Text style={styles.heading2}>Confirm Your Password</Text>
            <TextInput
              blurOnSubmit={true}
              onSubmitEditing={() => focusNextField()}
              placeholder="confirm password"
              style={styles.textinput}
              autoFocus={true}

            />
            <Button title="Button" onPress={submitHandler} />

          </View>

        )}
      </ScrollView>

    </>
  );
}



export default AddUserScreen;

