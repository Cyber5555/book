const register = (data) => {
  return {
    type: 'register',
    data
  }
}

const confirm = (data) => {
  return {
    type: 'confirm',
    data
  }
}




export const registration = (data) => {
  return async (dispatch) => {
    await fetch(`${process.env.APP_NAME}registration`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    })
      .then((data) => data.json())
      .then(res => {
        dispatch(register(res))
      })
      .catch(err => {
        console.log('ERROR --->>>', err.message)
      })
  }
}


export const confirmRegister = (data) => {
  return async (dispatch) => {
    await fetch(`${process.env.APP_NAME}verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    })
      .then((data) => data.json())
      .then(res => {
        dispatch(confirm(res))
      })
      .catch(err => {
        console.log('ERROR --->>>', err.message)
      })
  }
}