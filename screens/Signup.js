import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  MainContainer, PageLogo2, StyledInputLabel, StyledFormArea, StyledButton, StyledTextInput, LeftIcon, RightIcon, SubTitle,
  SecondContainer, ButtonText, Line, ExtraView, ExtraText, TextLink, TextLinkContent, Colors, PageTitle, AvatarView,
} from './../components/styles';
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper'; // Pour éviter que le clavier ne cache l'input

const {secondary, grey } = Colors;

class Signup extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      hidePassword: true,
      show: false,
      date: new Date(2000, 0, 1),
      dob: new Date(2000, 0, 1)
    };
  };
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    this.setState({ show: false })
    this.setState({ date: currentDate })
    this.setState({ dob: currentDate })
  };
  
  showDatePicker = () => {
    this.setState({ show: 'date' })
  };
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
              <PageTitle>Créer un compte</PageTitle>
              {this.state.show && (
              <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  style={{
                  backgroundColor: 'yellow',
                  }}
              />
              )}

              <Formik
              initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
              onSubmit={(values) => {
                  values = { ...values, dateOfBirth: this.state.dob };
                  console.log(values);
                  navigation.navigate("Welcome")
              }}
              > 
              {({ handleChange, handleBlur, handleSubmit, values }) => ( // Formalisme formulaire avec Formik
                  <StyledFormArea>
                    <MyTextInput
                        label="Nom et prénom"
                        placeholder="Henri Dupont"
                        placeholderTextColor={grey}
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName}
                        icon="person"
                    />
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
                        label="Date de naissance"
                        placeholder="01/01/2000"
                        placeholderTextColor={grey}
                        onChangeText={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                        value={this.state.dob ? this.state.dob.toDateString() : ''}
                        icon="calendar"
                        editable={false}
                        isDate={true}
                        showDatePicker={this.showDatePicker}
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
                    <MyTextInput
                        label="Confirmer mot de passe"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={grey}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry={this.state.hidePassword}
                        icon="lock"
                        isPassword={true}
                        hidePassword={this.state.hidePassword}
                        setHidePassword={this.setHidePassword}
                    />
                    <AvatarView >
                      <SubTitle>Ajouter une photo ?</SubTitle>
                      <StyledButton signing={true} onPress={() => {}}>
                        <Fontisto name="plus-a" size={20} color={'#ffffff'} />
                      </StyledButton>                
                    </AvatarView>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Inscription</ButtonText>
                    </StyledButton>
                    <Line />
                    <ExtraView>
                        <ExtraText>Déjà un compte? </ExtraText>
                        <TextLink onPress={()=> navigation.navigate("Login")}>
                        <TextLinkContent>Connexion</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                  </StyledFormArea>
              )}
              </Formik>
          </SecondContainer>
        </MainContainer>
      </KeyboardAvoidingWrapper>    
    );
  }
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={secondary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

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

export default Signup;
