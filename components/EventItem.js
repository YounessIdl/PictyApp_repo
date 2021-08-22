// CardView des evenements

import React from 'react'
import {StyleSheet, Text, Image, TouchableOpacity, Dimensions, Animated} from 'react-native'


class EventItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').width)
    } // Valeur initiale de l'animation = largeur de l'écran
    console.log("Made it to EventItem")
  }

  componentDidMount(){
    Animated.spring( // Animation de type spring (bounciness: élasticité/raideur)
      this.state.positionLeft,
      {
        toValue: 0,
        duration: 4000,
        useNativeDriver: false,
      }
    ).start()
  }

  render () {
    const event = this.props.event
    const displayEventDetail = this.props.displayEventDetail
    console.log(event._id)
    return (
    <Animated.View style={{left: this.state.positionLeft}}>
      <TouchableOpacity onPress = {() => displayEventDetail(event._id)} style={styles.vueGlobale}>
         <Image
           style={styles.image}
           source={{uri:event.imageUrl}}
         />
         <Text style={styles.title_text}>{event.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
 }
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
    },
  vueGlobale: {
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 3,
    paddingHorizontal:5 ,
    flexDirection: 'row',
    flex: 1 
    },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap', // Pour arrêter le titre s'il est trop long
    paddingRight: 5
    },
})

export default EventItem
