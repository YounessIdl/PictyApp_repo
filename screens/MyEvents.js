import * as React from 'react';
import { Line, MainContainer, SubTitle } from '../components/styles';
import { View, Text, Image } from 'react-native';

const MyEvents=({navigation}) =>{
  return (
    <MainContainer bottomTab={true}>
      <SubTitle>A venir</SubTitle>
      <Line/>
      <SubTitle >Evénements passés</SubTitle>
    </MainContainer>
  );
}

export default MyEvents
