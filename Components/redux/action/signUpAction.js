const repeat = (payload) => {
  return {
    type: 'repeat',
    payload
  }
}


export const resetCode = (name, email, password, password_confirmation) => {
  console.log(name);
  return async (dispatch) => {

    let requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://book.justcode.am/api/registration", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}