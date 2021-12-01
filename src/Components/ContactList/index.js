import React from "react";
import { View, Text, FlatList } from 'react-native';
import ContactComponent from "../ContactComponent";
import styles from './styles';

const ContactList = ({contactList, navigateToDetails}) => (
    <View style={styles.list}>
        <FlatList 
            style={styles.container}
            numColumns={1}
            data={contactList}
            renderItem={({item}) => (
                <ContactComponent navigateToDetails={navigateToDetails} {...item}/>
            )}
        />
    </View>
);

export default ContactList