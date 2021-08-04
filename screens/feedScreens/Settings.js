import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import {MainContainer, StyledButton, ButtonText} from '../../components/styles';
import { Alert } from 'react-native';
  

const Settings = ({navigation}) => {
  return (
    <MainContainer>
      <StatusBar style="light" />
      <StyledButton createEvent={true} onPress={() => {navigation.navigate("Login"); Alert.alert("Déconnecté");}}>
        <ButtonText>Se déconnecter</ButtonText>
      </StyledButton>
    </MainContainer>
  );
};

export default Settings;
