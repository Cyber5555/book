import store from "../store/index";


export const signUpReducer = (state = store, action) => {
  let temp = { ...state }
  switch (action.type) {

    case 'register':
      console.log(action.data);
      if (action.data.success === true && action.data.message == 'user successfully registered') {
        temp.register_success.success = action.data.success
        temp.register_success.verify_code = action.data.verify_code
      }
      else if (action.data.success === false && action.data.message === 'Validation errors') {
        if (action.data.data.name == 'The name field is required.') {
          temp.register_validation.name_error = true
        }
        else {
          temp.register_validation.name_error = false
        }

        if (action.data.data.email == 'The email field is required.') {
          temp.register_validation.email_error = true
        }
        else {
          temp.register_validation.email_error = false
        }

        if (action.data.data.password == 'The password field is required.') {
          temp.register_validation.password_error = true
        }
        else {
          temp.register_validation.password_error = false
        }

        if (action.data.data.password_confirmation == 'The password confirmation field is required.') {
          temp.register_validation.password_confirmation_error = true
        }
        else {
          temp.register_validation.password_confirmation_error = false
        }
      }
      break;

    case 'confirm':
      if (action.data.success === true && action.data.message == 'user successfully registered') {
        temp.verify_success.success = action.data.success
      }
      break;

    default:
      break;
  }
  return temp;
}