import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Feed from '../screens/Feed';
import Notifications from '../screens/Notifications';
import MyEvents from '../screens/MyEvents';
import NearMe from '../screens/NearMe';
import Settings from '../screens/feedScreens/Settings';
import Streaming from '../screens/feedScreens/Streaming';
import NewEvent from '../screens/feedScreens/NewEvent';
import {Colors} from './../components/styles';


const {secondary, primary } = Colors;

const AuthStack = createStackNavigator();
const HomeTabs=createBottomTabNavigator();
const FeedStack = createStackNavigator();

const Tabs=()=>{
  return(
    <HomeTabs.Navigator 
        screenOptions={{headerShown: false, tabBarActiveTintColor: 'black'}}>
            <HomeTabs.Screen name="News" 
                options={{title: 'Actualités', tabBarIcon: () =><Ionicons name="newspaper" size={25} color={secondary}/>,}} 
                component={FeedStacks}/>
            <HomeTabs.Screen name="Notifications" 
                options={{tabBarIcon: () =><Fontisto  name="bell" size={22} color={secondary} />,}} 
                component={Notifications}/>
            <HomeTabs.Screen name="MyEvents" 
                options={{title: 'Mes évenements', tabBarIcon: () =><MaterialIcons name="event" size={22} color={secondary} />,}} 
                component={MyEvents}/>
            <HomeTabs.Screen name="NearMe" 
                options={{title: 'A proximité', tabBarIcon: () =><MaterialIcons name="near-me" size={22} color={secondary} />,}} 
                component={NearMe}/>
    </HomeTabs.Navigator>
  )
}
const FeedStacks=()=>{
    return(
      <FeedStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: primary,
        },
        headerTintColor: secondary,
        headerLeftContainerStyle: {
          paddingLeft: 5,
        },
        }}>
            <FeedStack.Screen options={{headerShown: false}} name="Feed" component={Feed}/>
            <FeedStack.Screen options={{headerTitle: 'Mon profil',}} name="Settings" component={Settings}/>
            <FeedStack.Screen options={{headerTitle: 'Caster',}} name="Streaming" component={Streaming}/>
            <FeedStack.Screen options={{headerTitle: 'Nouvel événement',}} name="NewEvent" component={NewEvent}/>
      </FeedStack.Navigator>
    )
  }

export default () => (
    <NavigationContainer >
        <AuthStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
            <AuthStack.Screen  name="Login" component={Login} />
            <AuthStack.Screen  name="Signup" component={Signup} />
            <AuthStack.Screen  name="Welcome" component={Welcome} />
            <AuthStack.Screen  name="Tabs" component={Tabs} />
        </AuthStack.Navigator>       
    </NavigationContainer>
)

