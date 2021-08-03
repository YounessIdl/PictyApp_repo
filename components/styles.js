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
};

const { primary, secondary, tertiary, grey, lightGrey } = Colors;

export const MainContainer = styled.View`
  flex: 1;
  padding: 15px;
  padding-top: 0;
  background-color: ${Colors.primary};
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

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
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
  font-size: 20px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
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
    color: ${primary};
    padding: 25px;
  `}
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
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
    props.google == true &&
    `
    background-color: ${secondary};
    flex-direction: row;
    justify-content: center;
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
  color: ${grey} ;
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


