
export function getEventsById(uId){
    const url = 'https://pictytest.herokuapp.com/eventsr/' + uId
    return fetch(
        url,{
            method:'GET'
        }) 
    .then((response) => response.json()) 
    .catch((error) => console.log(error))
}