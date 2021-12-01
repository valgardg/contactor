import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import ContactList from "../../Components/ContactList";
import data from '../../Resources/data.json';
import ToolBar from '../../Components/ToolBar';
import styles from './styles';

import * as fileService from '../../Services/fileService';

import { SearchBar} from 'react-native-elements';

const Main = ({navigation:{navigate}}) => {

    const contactList = data.contacts.sort(function(a, b) {
        return (a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    });;

    const navigateToContactDetail = () => {
        navigate('ContactDetail');
    };

    const navigateToDetails = id => {
        const contact = contactList.filter(contact => contact.id==id);
        navigate('ContactDetail', {contact:contact[0]});
    };

    return (
        <View>
            {/* <ToolBar functionOne={() => navigateToContactDetail()}/> */}
            <SearchBar 
                style={styles.searchBar}
                round={true}
                placeholder="Search"
            />
            <ContactList navigateToDetails={id => navigateToDetails(id)} contactList={contactList}/>

            {/* testing expo file system... */}
            {/* <TouchableOpacity onPress={fileService.checkForDirectory()}>
                <Text>Button to test expo file system</Text>
            </TouchableOpacity> */}

        </View>
    )
};

export default Main;