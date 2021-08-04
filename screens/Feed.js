import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Alert, Image, Text, View } from 'react-native';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { ButtonText, Line, MainContainer, StreamEvent, StyledButton, SubTitle, Colors, AvatarView, PageLogo3 } from '../components/styles';
import { startClock } from 'react-native-reanimated';

const {secondary, primary } = Colors;


const Feed=({navigation})=> {
  return (
    <MainContainer >
      <StatusBar style="light-content" hidden = {true}/>
      <ScrollView>
        <AvatarView feed={true}>
          <PageLogo3 source={require('./../assets/img/pictylogo3.png')}/>
          <View >
            <SubTitle>Youness </SubTitle>
            <SubTitle>Statut: Visible</SubTitle>
          </View>
          <StyledButton signing={true} onPress={() => {}}>
            <Fontisto name="person" size={20} color={'#ffffff'} />
          </StyledButton>  
        </AvatarView>
        <StreamEvent>
          <FontAwesome name="dot-circle-o" size={22} color={secondary} />
          <SubTitle feed={true}>Pas d'événement en cours </SubTitle>
          <StyledButton  feed={true}  onPress={() => {}}>
            <ButtonText >Streaming</ButtonText>
          </StyledButton>
        </StreamEvent>
      </ScrollView>
      <StyledButton
        onPress={() => Alert.alert('Page en travaux... ')}
        createEvent={true}>
        <ButtonText style={{color: 'white',}}>Créer un événement</ButtonText>
      </StyledButton>
    </MainContainer>
  );
}

export default Feed;
