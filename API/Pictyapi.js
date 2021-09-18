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

export async function signUpWithPseudo(values){
    const url='https://pictytest.herokuapp.com/auth/signup'
    let databody={
        
    }
    try {
    const response = await fetch(
      url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
      JSON.stringify({
        pseudo: pseudo_txt,
        email: email_txt,
        password: password_txt
      })
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}