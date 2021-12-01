import React from "react";
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const ToolBar = ({functionOne, functionTwo}) => (
    <View>
        <TouchableOpacity onPress={functionOne}>
            <Text>Navigate to contact details</Text>
        </TouchableOpacity>
    </View>
);

export default ToolBar;