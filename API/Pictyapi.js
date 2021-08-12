
export function getEventsById(uId){
    const url = 'https://pictytest.herokuapp.com/eventsr/' + uId
    return fetch(url) 
    .then((response) => response.json()) 
    .catch((error) => console.log(error))
}