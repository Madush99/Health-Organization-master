import React, { useEffect } from 'react'
import { Text } from 'react-native-web'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/activityIndicator.js';
import {getOrgDetails} from '../../Store/actions/oyanizationActions.js'


const OrganizationScreen = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const detailsOrg = useSelector((state) => state.detailsOrg);
  const { loading, error, organizations } = detailsOrg;

  useEffect(() => {
    dispatch(getOrgDetails(id));
  }, [dispatch]);


  return (
    <>
      { loading ? (
        <Loader />
      ) : error ? (
        <Text> error</Text>
      ) : (
        <>
          <Text>{organizations.orgName}  </Text>
          <Text> Madusanka</Text>
        </>
      ) }

    </>
  )
}

export default OrganizationScreen