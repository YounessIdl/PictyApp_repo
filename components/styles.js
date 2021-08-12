import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: '#ffffff', // Blanc
  secondary: '#6cb7ba', // Couleur logo
  tertiary: '#6bb2b5', //Logo foncé
  grey: '#9CA3AF', // Gris foncé
  lightGrey:'#dcdee0', // Gris clair
  interGrey: '#CCD0D4', // Intermediate
};

const { primary, secondary, tertiary, grey, lightGrey, interGrey } = Colors;

export const MainContainer = styled.View`
  flex: 1;
  padding: 0;
  padding-top: 0;
  background-color: ${Colors.primary};
  ${(props) =>
    props.bottomTab &&
    `
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
  `}
  ${(props) =>
    props.Events &&
    `
    flex-direction: column;
  `}
`;

export const SecondContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;
export const PageLogo = styled.Image`
    height: 200px;
`;
export const PageLogo2 = styled.Image`
    margin-top: 50px;
    height: 75px;
`;

export const WelcomeContainer = styled(SecondContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const AvatarView = styled.View`
  align-items: center;
  flex-direction: row;
  margin: auto;
  ${(props) =>
    props.feed &&
    `
    margin: 0px;
    padding-top: 5px;
    justify-content: space-between;
    padding-horizontal: 25px;
  `}
`;

export const WelcomeImage = styled.Image`
  height: 0%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${Colors.secondary};
  ${(props) =>
    props.welcome &&
    `
    font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  letter-spacing: 1px;
  color: ${secondary};
  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;
export const StyledTextInput = styled.TextInput`
  background-color: ${lightGrey};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${Colors.grey};
`;

export const StyledInputLabel = styled.Text`
  color: ${grey};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;
export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
    padding: 25px;
  `}
  ${(props) =>
    props.last == true &&    
    `
    font-weight: bold;
  `}
  
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${grey};
  font-size: 15px;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.google &&
    `
    flex-direction: row;
    justify-content: center;
  `}
  ${(props) =>
    props.last  &&    
    `
    margin-horizontal: 50px;
  `}
  ${(props) =>
    props.signing &&    
    `
    height: 50px;
    margin-left: 20px;
  `}
  ${(props) =>
    props.feed &&    
    `
    margin-vertical: 6px;
    height: 35px;
  `}
  ${(props) =>
    props.createEvent &&    
    `
    height: 45px;
    margin-horizontal: 40px;
    border-radius: 10px;
  `}
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${grey};
  margin-vertical: 10px;
`;

export const TextLinkContent = styled.Text`
  color: ${tertiary} ;
  font-size: 15px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const StreamEvent = styled.View`
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
  padding-bottom: 5px;
  backgroundColor: ${interGrey};
  borderWidth: 0px;
`;

export const PageLogo3 = styled.Image`
    width: 100px;
    aspectRatio: 2.42;
`;
