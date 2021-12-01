import React from "react";
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './styles';

const ContactDetail = ({navigation:{navigate}, route}) => {
    const contact = route.params.contact;
    console.log(contact);
    console.log(contact.name);

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image}
                source={{uri: contact.image}}/>
                <TouchableOpacity>
                    <Text>edit photo</Text>
                </TouchableOpacity>
                {/* This is where we will have the AddModal option (yuck)*/}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{contact.name}</Text>
                <Text style={styles.textStyle}>{contact.phoneNumber}</Text>
            </View>
        </View>
    )
}

export default ContactDetail;