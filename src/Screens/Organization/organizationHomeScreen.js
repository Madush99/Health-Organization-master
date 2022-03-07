import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/activityIndicator.js';
import { deleteOrganization, listOrg } from '../../Store/actions/oyanizationActions.js';
import styles from '../../Styles/styles.js';



const OrganizationScreen = () => {

    const dispatch = useDispatch();

    const orgList = useSelector((state) => state.orgList);
    const { loading, error, organizations } = orgList;

    const deleteOrg = useSelector((state) => state.deleteOrg);
    const { success: successDelete } = deleteOrg



    useEffect(() => {
        dispatch(listOrg());
        if(successDelete){
            alert("Organization deleted successfully");
        }
    }, [dispatch,successDelete]);

    const deleteHandler = (id) => {
        dispatch(deleteOrganization(id))
    }

    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);


    return (
        <>
            <ScrollView style={ styles.form }>
                { loading ? (<Loader />
                ) : error ? (<Text>Error</Text>
                ) : (

                    <View style={ styles.listcontainer }>
                        <List.Section title="Organizations">
                            { organizations.length > 0 && organizations.map(org => {
                                return (
                                    <>
                                        <View style={ styles.list }>
                                            <List.AccordionGroup key={ org._id }>

                                                <List.Accordion title={ org.orgName } id="1"
                                                    expanded={ expanded }
                                                    onPress={ handlePress }>

                                                    <Link to={ `/org/${org._id}` }>
                                                        <List.Item title="View Organization" style={ styles.linkStyle } />
                                                    </Link>
                                                    <List.Item title="Edit Organization" />
                                                    <List.Item title="Delete " onPress={() => deleteHandler(org._id)}/>
                                                </List.Accordion>
                                            </List.AccordionGroup>
                                        </View>
                                    </>
                                )

                            }) }

                        </List.Section>
                    </View>
                ) }

            </ScrollView>
        </>
    )
}

export default OrganizationScreen