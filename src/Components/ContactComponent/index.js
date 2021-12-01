import React from "react";
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './styles';

const ContactComponent = ({id, name, phoneNumber, image, navigateToDetails}) => (
    
    <TouchableOpacity onPress={() => navigateToDetails(id)}>
    <View style={styles.contactStyle}>
        <Text style={styles.text}>{name}</Text>
        <Image 
        style={styles.image}
        source={{uri: image}}/>
    </View>
    </TouchableOpacity>
);

export default ContactComponent;