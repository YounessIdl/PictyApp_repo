import React from 'react'
import { FlatList } from 'react-native'
import EventItem from './EventItem'

class EventsList extends React.Component{
    constructor(props) {
        super(props)
        console.log("Made it to EventsList")
    }

    displayEventDetail = (idEvent) => {
        console.log("Displaying event " + idEvent)
    } 

    render(){
        return (
            <FlatList
                data={this.props.events}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (  
                <EventItem
                    event={item}
                    displayEventDetail={this.displayEventDetail}
                />
                )}
            />
        )
    }
}

export default EventsList