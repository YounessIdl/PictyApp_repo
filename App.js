import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {Login} from './screens/Login'
import {Signup} from './screens/Signup'
import {Welcome} from './screens/Welcome'


const AuthStack=createStackNavigator();

export default ()=>(
    <NavigationContainer>
        <AuthStack.Navigator initialRouteName={Login}>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <AuthStack.Screen name="SignUp" component={Signup}/>
            <AuthStack.Screen name="Welcome" component={Welcome}/>
        </AuthStack.Navigator>
    </NavigationContainer>
)