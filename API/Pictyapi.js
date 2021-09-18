export function getEventsById(uId){
    const url = 'https://pictytest.herokuapp.com/eventsr/' + uId
    return fetch(url) 
    .then((response) => response.json()) 
    .catch((error) => console.log(error))
}

export function findEventFromEventID(eId){
    const url = 'https://pictytest.herokuapp.com/events/' + eId
    return fetch(url) 
    .then((response) => response.json()) 
    .catch((error) => console.log(error))
}
