import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

import {
  Avatar, AvatarView, PageTitle, SubTitle, StyledFormArea, StyledButton, WelcomeContainer, ButtonText, SecondContainer,
} from './../components/styles';

const Welcome = ({navigation}) => {
  return (
    <>
      <StatusBar style="light" />
      <SecondContainer>

        <WelcomeContainer>
          <PageTitle welcome={true}>Bienvenue sur Picty!</PageTitle>
          <SubTitle welcome={true}>Olga Simpson</SubTitle>
          <SubTitle welcome={true}>olgasimp@gmail.com</SubTitle>
          <AvatarView >
            <SubTitle>Ajouter une photo ?</SubTitle>
            <Avatar resizeMode="contain" source={require('./../assets/img/pictylogo1.png')} />
          </AvatarView>
          

          <StyledFormArea>
            <StyledButton onPress={() => {}}>
              <Fontisto name="angle-right" size={25} color={'#ffffff'} />
            </StyledButton>
            <StyledButton onPress={() => navigation.navigate("Login")}>
              <ButtonText>Se déconnecter</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </SecondContainer>
    </>
  );
};

export default Welcome;
