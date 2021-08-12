import React, { useState } from 'react';
import {getEventsById} from '../API/Pictyapi';
import EventsList from '../components/EventsList';
import { MainContainer, AvatarView } from '../components/styles';
import {Picker} from '@react-native-community/picker';


class MyEvents extends React.Component {
  
  constructor (props){
    super(props)
    this.state = {
      events: [],
      selectEvents: 'all'
    };
  };
  
  loadEvents(uId){
      getEventsById(uId).then(data => {
        this.setState({ events : data,})  
        console.log(this.state.events) 
      }) 
  };

  componentDidMount(){
    this.loadEvents(123456) // User id to get all events 
    console.log("Component mounted")
  }

  render(){
    return (
        <MainContainer Events={true}>
          <AvatarView>
            <Picker
              selectedValue={this.state.selectEvents}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue, itemIndex) => this.setState({selectEvents: itemValue})}
              >
              <Picker.Item label="Tous" value="all" />
              <Picker.Item label="A venir" value="next" />
            </Picker>
          </AvatarView>
          <EventsList events={this.state.events}></EventsList>
        </MainContainer>
      );
  };
}

export default MyEvents
