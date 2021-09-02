
export async function getEventsById(uId){
    const url = 'https://pictytest.herokuapp.com/eventsr/' + uId
    try {
    const response = await fetch(
      url);
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
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
