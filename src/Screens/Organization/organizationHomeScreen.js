import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native-web';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/activityIndicator';
import { listOrg } from '../../Store/actions/oyanizationActions';
import styles from '../../Styles/styles';



const OrganizationScreen = () => {

    const dispatch = useDispatch();

    const orgList = useSelector((state) => state.orgList);
    const { loading, error, organizations } = orgList;

    useEffect(() => {
        dispatch(listOrg());
    }, []);

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
                                                    <List.Item title="Delete " />
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