import store from "../store/index";


export const signUpReducer = (state = store, action) => {
  let temp = { ...state }
  switch (action.type) {
    
    case 'repeat':
      console.log(action.payload);
      break;

    default:
      break;
  }
  return temp;
}