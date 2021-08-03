import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/Login.js';
import Signup from './../screens/Signup.js';
import Welcome from './../screens/Welcome.js';

import { Colors } from './../components/styles';
const { tertiary, primary, grey } = Colors;

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
            <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome} />
          </Stack.Navigator>
        </NavigationContainer>
      );
};

export default StackNav;

