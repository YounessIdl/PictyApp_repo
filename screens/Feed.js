import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { ButtonText, MainContainer, StreamEvent, StyledButton, SubTitle, Colors, AvatarView, PageLogo3 } from '../components/styles';

const {secondary} = Colors;

class Feed extends React.Component {
  render(){
    const navigation = this.props.navigation    
    return (
      <MainContainer >
        <StatusBar style="light-content" hidden = {true}/>
        <ScrollView>
          <AvatarView feed={true}>
            <PageLogo3 source={require('./../assets/img/pictylogo2.png')}/>
            <View >
              <SubTitle>Youness </SubTitle>
              <SubTitle>Statut: Visible</SubTitle>
            </View>
            <StyledButton signing={true} onPress={() => navigation.navigate("Settings")}>
              <Fontisto name="person" size={20} color={'#ffffff'} />
            </StyledButton>  
          </AvatarView>
          <StreamEvent>
            <FontAwesome name="dot-circle-o" size={22} color={secondary} />
            <SubTitle feed={true}>Pas d'événement en cours </SubTitle>
            <StyledButton  feed={true}  onPress={() => navigation.push("Streaming")}>
              <ButtonText >Streaming</ButtonText>
            </StyledButton>
          </StreamEvent>
        </ScrollView>
        <StyledButton
          onPress={() => navigation.navigate("NewEvent")}
          createEvent={true}>
          <ButtonText style={{color: 'white',}}>Créer un événement</ButtonText>
        </StyledButton>
      </MainContainer>
    );
  }
  
}

export default Feed;
