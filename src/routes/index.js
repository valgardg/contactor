import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from '../Views/Main';
import NewContact from "../Views/NewContact";
import ContactDetail from "../Views/ContactDetail";

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="NewContact" component={NewContact} />
            <Stack.Screen name="ContactDetail" component={ContactDetail} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;