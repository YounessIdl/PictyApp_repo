import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import {
  MainContainer, PageLogo2, PageTitle,ExtraView, ExtraText, TextLink, TextLinkContent, Colors, StyledInputLabel, 
  StyledFormArea, StyledButton, StyledTextInput, LeftIcon, RightIcon, SecondContainer, ButtonText, Line
} from './../components/styles';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'; // Pour éviter que le clavier ne cache l'input
import { color } from 'react-native-reanimated';

const { grey, primary, secondary } = Colors;
//status bar: Barre de notifications

class Login extends React.Component{
  // Tout en classe car sinon pas accès au cycle de vie et donc au constructeur. Autre pb: Pas moyen de définir les hooks (useState, etc) dans une classe
  // --> Obligé d'utiliser le state à la place
  constructor(props){
    super(props)
    this.state= {
      hidePassword: true
    }
  }
  setHidePassword = (hide) =>{
    this.setState({hidePassword: hide})
  }
  render(){
    const navigation = this.props.navigation
    return (
      <KeyboardAvoidingWrapper>
        <MainContainer>
          <StatusBar style="light-content" hidden = {true}/>
          <SecondContainer>
            <PageLogo2 resizeMode="contain" source={require('./../assets/img/pictylogo2.png')} />
            <PageTitle>Se connecter</PageTitle>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => {
                console.log(values);
                navigation.navigate("Welcome")
              }}
            >
            {({ handleChange, handleBlur, handleSubmit, values }) => ( //Méthodes de formik pour formulaires (change, blur et submit)
            <StyledFormArea>
                <MyTextInput
                label="Adresse mail"
                placeholder="abc@gmail.com"
                placeholderTextColor={grey}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                icon="mail"
                />
                <MyTextInput
                label="Mot de passe"
                placeholder="* * * * * * * *"
                placeholderTextColor={grey}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={this.state.hidePassword}
                icon="lock"
                isPassword={true}
                hidePassword={this.state.hidePassword}
                setHidePassword={this.setHidePassword}
                />
                <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <StyledButton google={true}>
                <Fontisto name="google" size={25} color={primary} />
                <ButtonText google={true}>Connectez-vous avec 
                    <Text style={{color: '#4285F4'}}> G</Text><Text style={{color: 'red'}}>o</Text><Text style={{color: 'yellow'}}>o</Text><Text style={{color: '#4285F4'}}>g</Text><Text style={{color: 'green'}}>l</Text><Text style={{color: 'red'}}>e</Text>
                </ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Pas encore de compte ? </ExtraText>
                  <TextLink onPress={()=> navigation.navigate("Signup")}>
                      <TextLinkContent>Inscription</TextLinkContent>
                  </TextLink>
                </ExtraView>
                <StyledButton last={true}>
                  <ButtonText last={true}>Découvrez Picty</ButtonText>
                </StyledButton>
            </StyledFormArea>
            )}
            </Formik>
          </SecondContainer>
        </MainContainer>
      </KeyboardAvoidingWrapper>
    );
  }
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={secondary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={secondary} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;