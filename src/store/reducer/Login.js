import { userToken } from '../Type'
import { getToken } from '@utils/cookies'

console.log(getToken(),'getToken()');

const login = {
  token: localStorage.getItem('ms_username') ? localStorage.getItem('ms_username') : ''
}

const loginReducer = function (state = login, action) {
  switch (action.type) {
    case userToken:
      return {
        ...state,
        token: action.value
      }
    default:
      return state
  }
}

export default loginReducer