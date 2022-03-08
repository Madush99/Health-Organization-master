import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
import ActivityIndicator from '../../components/activityIndicator.js';
import * as actionTypes from '../../Store/actions/actionTypes.js';
import { getOrgDetails, orgUpdate } from '../../Store/actions/oyanizationActions.js';

const UpdateOrgScreen = ({ history }) => {

    const { id } = useParams();
    const orgId = id

    const [orgName, setOrgName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();


    const detailsOrg = useSelector((state) => state.detailsOrg);
    const { loading, error, organizations } = detailsOrg;

    const updateOrg = useSelector((state) => state.updateOrg);
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = updateOrg

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: actionTypes.UPDATE_ORGANIZATION_RESET })
            window.location.href = '/'
        }
        if (!organizations||!organizations.orgName || organizations._id !== orgId) {
            dispatch(getOrgDetails(id))
        } else {
            setOrgName(organizations.orgName)
            setEmail(organizations.email)
        }

    }, [dispatch, history, organizations, orgId, successUpdate])

    const submitHandler = () => {
        dispatch(orgUpdate({ _id: orgId, orgName, email }))
    }

    return (
        <>

            <ScrollView>
                <View style={ styles.form }></View>
                { loadingUpdate && <Text>Loading....</Text> }
                { errorUpdate && <Text>error..</Text> }

                { loading ? (
                    <ActivityIndicator />
                ) : error ? (
                    <Text>error....</Text>
                ) : (
                    <View style={ styles.container }>
                        <Text style={ styles.heading }>UPDATE ORGANIZATION</Text>

                        <Text style={ styles.heading2 }>Enter Organization Name</Text>
                        <TextInput
                            blurOnSubmit={ true }

                            placeholder="Name"
                            style={ styles.textinput }
                            autoFocus={ true }
                            value={ orgName }
                            onChangeText={ setOrgName }

                        />
                        <Text style={ styles.heading2 }>Enter Organization Email</Text>
                        <TextInput
                            blurOnSubmit={ true }

                            placeholder="email"
                            style={ styles.textinput }
                            autoFocus={ true }
                            value={ email }
                            onChangeText={ setEmail }
                        />

                        <Button title="Button" onPress={ submitHandler } />

                    </View>

                ) }
            </ScrollView>

        </>
    )
}

export default UpdateOrgScreen