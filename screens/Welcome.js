import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Avatar,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  WelcomeContainer,
  ButtonText,
  SecondContainer,
} from './../components/styles';

export const Welcome= ({navigation})=> {
  return (
    <>
      <StatusBar style="light" />
      <SecondContainer>

        <WelcomeContainer>
          <PageTitle welcome={true}>Bienvenue sur Picty!</PageTitle>
          <SubTitle welcome={true}>Olga Simpson</SubTitle>
          <SubTitle welcome={true}>olgasimp@gmail.com</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="contain" source={require('./../assets/img/pictylogo2.png')} />
            <StyledButton onPress={() => {}}>
              <ButtonText>Se déconnecter</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </SecondContainer>
    </>
  );
};

