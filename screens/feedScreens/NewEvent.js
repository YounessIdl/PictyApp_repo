import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import {MainContainer} from '../../components/styles';
  

class NewEvent extends React.Component {
  render(){
    const navigation = this.props.navigation
    return (
      <MainContainer >
        <StatusBar style="light" />
      </MainContainer>
    ); 
  }
};

export default NewEvent;
