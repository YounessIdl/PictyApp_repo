import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Login from '../screens/Login.js';
import Signup from '../screens/Signup.js';
import Welcome from '../screens/Welcome.js';
import Feed from '../screens/Feed.js';

import { Colors } from '../components/styles';

const { tertiary, primary, grey } = Colors;

const AuthStack = createStackNavigator();
const HomeTabs=createBottomTabNavigator();
const FeedStack=createStackNavigator();
const WelcomeStack=createStackNavigator();


const FeedStackScreen=()=>{
  return(<FeedStack.Navigator>
    <FeedStack.Screen name="Feed" component={Feed} options={{headerLeft:()=>{return null}}}/>
  </FeedStack.Navigator>)
}

const WelcomeStackScreen=()=>{
  return (<WelcomeStack.Navigator>
    <WelcomeStack.Screen name="Welcome" component={Welcome} options={{headerLeft:()=>{return null}}}/>
  </WelcomeStack.Navigator>)
  }

const Tabs=()=>{
  return(

    <HomeTabs.Navigator>
            <HomeTabs.Screen name="WelcomeScreen" options={{headerShown:false}} component={WelcomeStackScreen}/>
            <HomeTabs.Screen name="FeedScreen" options={{headerShown:false}} component={FeedStackScreen}/>
    </HomeTabs.Navigator>
  )
}

export default () => (

  
        <NavigationContainer >
          <AuthStack.Navigator>
            <AuthStack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <AuthStack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
            <AuthStack.Screen options={{headerShown: false}} name="Tabs" component={Tabs} />
          </AuthStack.Navigator>       
        </NavigationContainer>
      )




